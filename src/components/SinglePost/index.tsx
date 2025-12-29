import { findPostBySlugCached } from '@/lib/post/queries';

type SinglePostProos = {
  slug: string;
};

export default async function SinglePost({ slug }: SinglePostProos) {
  const post = await findPostBySlugCached(slug);

  return (
    <>
      <h1>{post?.title}</h1>
    </>
  );
}
