import clsx from 'clsx';
import PostCoverImage from '../PostCoverImage';
import PostSummary from '../PostSummary';
import { findAllPublicPosts } from '@/lib/post/queries';

export default async function PostsList() {
  const posts = await findAllPublicPosts();

  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-8',
        'sm:grid-cols-2',
        'lg:grid-cols-3',
      )}
    >
      {posts?.length > 0 &&
        posts.slice(1)?.map(post => {
          const postLink = `/post/${post.slug}`;
          return (
            <div className={clsx('flex flex-col gap-4 group')} key={post.id}>
              <PostCoverImage
                imageProps={{
                  src: post.coverImageUrl,
                  width: 1200,
                  height: 720,
                  alt: post.title,
                }}
                linkProps={{
                  href: postLink,
                }}
              />

              <PostSummary
                postLink={postLink}
                postHeading='h2'
                createdAt={post.createdAt}
                excerpt={post.excerpt}
                title={post.title}
              />
            </div>
          );
        })}
    </div>
  );
}
