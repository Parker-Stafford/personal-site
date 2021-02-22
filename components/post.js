import React from 'react';
import Link from 'next/link';

export default function Post({
  title, description, img, url,
}) {
  return (
    <>
      <Link href={url}>
        <div>
          <h1>{title}</h1>

          <img src={img} alt={`${title}`} />
          <h4>{description}</h4>
        </div>
      </Link>
    </>
  );
}
