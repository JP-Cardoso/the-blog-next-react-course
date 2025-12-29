import clsx from 'clsx';
import PostCoverImage from '../PostCoverImage';
import PostSummary from '../PostSummary';
import { findAllPublicPostsCached } from '@/lib/post/queries';

export default async function PostFeatured() {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];

  const postLink = `/post/${post.slug}`;

  return (
    <section
      className={clsx('grid grid-cols-1 gap-8 mb-16', 'sm:grid-cols-2 group')}
    >
      <PostCoverImage
        imageProps={{
          src: post.coverImageUrl,
          width: 1200,
          height: 720,
          priority: true,
          alt: post.title,
        }}
        linkProps={{
          href: '#',
        }}
      />
      <PostSummary
        postLink={postLink}
        postHeading='h1'
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        title={post.title}
      />
    </section>
  );
}
