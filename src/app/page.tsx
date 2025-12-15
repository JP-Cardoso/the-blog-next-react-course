import { Suspense } from 'react';
import PostsList from '@/components/PostsList';
import SpinLoader from '@/components/SpinLoader';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import PostHeading from '@/components/PostHeading';
import PostCoverImage from '@/components/PostCoverImage';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section
        className={clsx('grid grid-cols-1 gap-8 mb-16', 'sm:grid-cols-2 group')}
      >
        <PostCoverImage
          imageProps={{
            src: '/images/bryen_9.png',
            width: 1200,
            height: 720,
            priority: true,
            alt: 'Título do post',
          }}
          linkProps={{
            href: '#',
          }}
        />
        <div className={clsx('flex flex-col gap-4', 'sm:justify-center')}>
          <time
            className={clsx('text-slate-600 block text-sm/tight')}
            dateTime='2025-12-14'
          >
            14/12/2025 10:00
          </time>
          <PostHeading url='#' as='h1'>
            Nobis vitae animi
          </PostHeading>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
          consequatur harum provident qui aliquam quam! Nobis vitae animi
          voluptates dolores, voluptatem, debitis veritatis iste et dicta, esse
          optio minus omnis.
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Footer</p>
      </footer>
    </Container>
  );
}
