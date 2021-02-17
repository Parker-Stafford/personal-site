import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Parker Stafford About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>About me</h1>
      <p>
        Something I’ve always been passionate about is solving interesting, complex problems
        using innovation and creativity. While I was in University, this led me to study Phi
        losophy and Neuroscience. I loved looking at abstract, complicated problems and work
        ing to design either empirical tests or abstract arguments to work to solve these pr
        oblems. When I found software engineering, I found my true passion. It is the perfec
        t combination of problem solving, creativity, and innovation. I love facing down new
        complicated problems everyday. Additionally, I really enjoy working in the collabora
        tive, innovative landscape of software engineering. There are always new tools and i
        mprovements being made and it makes engineering fresh and exciting. Outside of softw
        are engineering, I recently spent three years living and working in Japan. It was an
        amazing experience in which I grew and learned a ton everyday. I like sports, beer,
        video games, and spending time with friends and family. I think the approach you have
        taken at Tavour is really unique. I love the idea of both helping craft brewers and p
        roviding awesome beer for consumers who normally wouldn’t be able to get it. I think
        that my personal values and drive would be a great fit at Tavour! I look forward to
        hearing from you all.
      </p>
      <Link href="/resume.pdf">Resume</Link>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="about-me">About me</Link>
      <Link href="work">Selected work</Link>
    </>
  );
}