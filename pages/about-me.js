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
      <h3>Hello World!</h3>
      <h4>I&apos;m Parker!</h4>
      <h4>I&apos;m a software engineer, brother, philosopher, son, scientist, beer drinker,
        video game player, pet lover, and continuous learner.
      </h4>
      <p>
        I&apos;m probably a lot of other things too, but that&apos;s what came to mind initially.
      </p>
      <p>
        Something I’ve always been passionate about is solving interesting, complex problems
        using innovation and creativity. While I was in University, this led me to study Philosophy
        and Neuroscience. I loved looking at abstract, complicated problems and working
        to design either empirical tests or abstract arguments to work to solve these problems.
        When I found software engineering, I found my true passion. For me, it&apos;s the perfect
        combination of problem solving, creativity, and innovation. I love facing down new
        complicated problems everyday. Additionally, I really enjoy working in the collaborative,
        innovative landscape of software engineering. There are always new tools and improvements
        being made and it makes engineering fresh and exciting.
      </p>
      <p>
        Outside of software engineering, I still love to read and talk about both philosophy and
        neuroscience. I recently spent three years living and working in Japan.
        It was an amazing experience in which I grew and learned a ton everyday.
      </p>
      <p>
        Send me an email or a message on LinkedIn I&apos;d love to chat!
      </p>
      <Link href="/resume.pdf">Resume</Link>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="about-me">About me</Link>
      <Link href="work">Selected work</Link>
    </>
  );
}
