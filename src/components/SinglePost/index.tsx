import { findPostBySlugCached } from '@/lib/post/queries';
import Image from 'next/image';
import PostDate from '../PostDate';
import PostHeading from '../PostHeading';
import SafeMarkdown from '../SafeMarkdown';

type SinglePostProos = {
  slug: string;
};

export default async function SinglePost({ slug }: SinglePostProos) {
  const post = await findPostBySlugCached(slug);

  return (
    <article className='mb-16'>
      <header className='flex flex-col gap-4 mb-4'>
        <Image
          className='rounded-xl'
          src={post?.coverImageUrl}
          width={1200}
          height={720}
          alt={post?.title}
        />

        <PostHeading url={`/post/${post.slug}`}>{post?.title}</PostHeading>

        <p>
          {post?.author} | <PostDate createdAt={post?.createdAt} />
        </p>
      </header>

      <p className='text-xl text-slate-600 mb-4'>{post?.excerpt}</p>

      <SafeMarkdown markdown={post?.content} />
    </article>
  );
}
