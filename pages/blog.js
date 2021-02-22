import React from 'react';
import linkPreviewGenerator from 'link-preview-generator';
import Head from 'next/head';
import Link from 'next/link';
import Post from '../components/post';

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Parker Stafford Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Blog</h1>
      <h3>I write stuff on medium sometimes.</h3>
      <p>You can find my blog <a href="https://parker-stafford92.medium.com/">here!</a></p>
      <h2>Individual posts</h2>
      {posts.map((post) => (
        <Post
          key={post.url}
          title={post.title}
          img={post.img}
          description={post.description}
          url={post.url}
        />
      ))}
      <br />
      <Link href="/resume.pdf">Resume</Link>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about-me">About me</Link>
      <Link href="/work">Selected work</Link>
    </>
  );
}

const urls = ['https://medium.com/javascript-in-plain-english/using-usereducer-for-forms-in-react-d80f297cfc0a', 'https://levelup.gitconnected.com/installing-and-configuring-postgresql-on-ubuntu-20-04-e50122635927'];

export async function getStaticProps() {
  const posts = [];
  for (let i = 0; i < urls.length; i++) {
    posts.push(linkPreviewGenerator(urls[i]));
  }
  return Promise.all(posts)
    .then((previews) => {
      const allPosts = [];
      for (let i = 0; i < previews.length; i++) {
        allPosts[i] = previews[i];
        allPosts[i].url = urls[i];
      }
      return {
        props: {
          posts: allPosts,
        },
      };
    })
    .catch((err) => {
      console.log(err);
      return {
        props: {
          posts: [],
        },
      };
    });
}
