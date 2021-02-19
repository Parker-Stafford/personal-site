import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Parker Stafford</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World</h1>
      <h3>I&apos;m Parker!</h3>
      <p>I&apos;m a software engineer in Washington State.</p>
      <Link href="/resume.pdf">Resume</Link>
      <Link href="/blog">Blog</Link>
      <Link href="about-me">About me</Link>
      <Link href="work">Selected work</Link>
    </>
  );
}
