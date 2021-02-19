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
      <p>You can find most of my work <a href="https://github.com/parker-stafford">here!</a></p>
      <h2>DnD Mana Tracker</h2>
      <h3>Creator and Fullstack Engineer</h3>
      <p>
        Fifth edition Dungeons and Dragons (DnD 5e) uses spell slots to track spell usage.
        However, many RPG&apos;s rely on a mana or energy system to track spell usage.
        DnD Mana Tracker combines the two together. It&apos;s an application that allows
        players and Dungeon Masters (DM&apos;s) to track their mana usage throughout the game.
      </p>
      <p>
        Features include:
      </p>
      <ul>
        <li>OAuth secure login</li>
        <li>Character creation and modification</li>
        <li>Mana loss and gain via spell casting and potion drinking</li>
        <li>Campaign creation with custom spell costs and potion values</li>
      </ul>
      <p>
        The application can be found <a href="https://dnd-mana-tracker.vercel.app/" target="_blank" rel="noopener noreferrer">here!</a>
      </p>
      <p>
        The source code can be found <a href="https://github.com/Parker-Stafford/dnd-mana-tracker" target="_blank" rel="noopener noreferrer">here!</a>
      </p>
      <p>
        Look <a href="https://github.com/Mormont-team-6/places-to-stay" target="_blank" rel="noopener noreferrer">here</a> for additional code related to the project.
      </p>
      <h2>Beartnt</h2>
      <h3>Front-end Engineer | Related listings microservice</h3>
      <p>Beartnt is a booking application for vacation rentals.</p>
      <p>
        I was responsible for the design and implementation of
        the related listings service (&apos;more places to stay&apos;) the application.
      </p>
      <p>
        The application can be found <a href="http://beartnt.com/" target="_blank" rel="noopener noreferrer">here!</a>
      </p>
      <p>
        The source code can be found <a href="https://github.com/Mormont-team-6/places-to-stay" target="_blank" rel="noopener noreferrer">here!</a>
      </p>
      <p>
        Look <a href="https://github.com/Mormont-team-6/places-to-stay" target="_blank" rel="noopener noreferrer">here</a> for additional code related to the project.
      </p>
      <h2>Aquabnb</h2>
      <h3>Back-end Engineer | Reservations microservice</h3>
      <p>
        Aquabnb is a booking application for vacation rentals.
      </p>
      <p>
        I was responsible for taking the reservations/calendar microservice and scaling up
        the back-end and database to handle web traffic. Through caching, horizontal scaling,
        and bundle optimizations I was able to increase through put and response times.
      </p>
      <p>
        The source code can be found <a href="https://github.com/team-kutner/calendar-service" target="_blank" rel="noopener noreferrer">here!</a>
      </p>
      <p>
        Look <a href="https://github.com/team-kutner" target="_blank" rel="noopener noreferrer">here</a> for additional code related to the project.
      </p>
      <br />
      <Link href="/resume.pdf">Resume</Link>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="about-me">About me</Link>
      <Link href="work">Selected work</Link>
    </>
  );
}
