import clsx from 'clsx';
import PostCoverImage from '../PostCoverImage';
import PostHeading from '../PostHeading';

export default function PostFeatured() {
  return (
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
  );
}
