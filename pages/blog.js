import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
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
      <a href="https://medium.com/javascript-in-plain-english/using-usereducer-for-forms-in-react-d80f297cfc0a">Using useReducer for Forms in React</a>
      <br />
      <a href="https://levelup.gitconnected.com/installing-and-configuring-postgresql-on-ubuntu-20-04-e50122635927">Installing and Configuring PostgreSQL on Ubuntu 20.04</a>
      <br />
      <Link href="/resume.pdf">Resume</Link>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="about-me">About me</Link>
      <Link href="work">Selected work</Link>
    </>
  );
}
