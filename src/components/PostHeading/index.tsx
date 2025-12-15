import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

export default function PostHeading({
  children,
  url,
  as: Tag = 'h2',
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: 'text-2xl/tight sm:text-4xl font-extrabold',
    h2: 'text-2xl/tight font-bold',
  };

  return (
    <Tag className={clsx(headingClassesMap[Tag])}>
      <Link className='hover:text-slate-600 transition duration-300' href={url}>
        {children}
      </Link>
    </Tag>
  );
}
