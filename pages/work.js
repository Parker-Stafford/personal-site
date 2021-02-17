import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Parker Stafford Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Work</h1>
      <h3>Here is some of my recent work</h3>
      <p>You can find all my work<a href="https://github.com/parker-stafford">here!</a></p>
      <h2>Beartnt</h2>
      <h3>Related listings microservice</h3>
      <p>
        Responsible for the design and implementation of
        the related listings service of a booking application.
      </p>
      <p>The application can be found <a href="http://beartnt.com/">here!</a></p>
      <br />
      <Link href="/resume.pdf">Resume</Link>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="about-me">About me</Link>
      <Link href="work">Selected work</Link>
    </>
  );
}
