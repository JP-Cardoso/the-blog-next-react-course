import clsx from 'clsx';
import PostHeading from '../PostHeading';
import PostDate from '../PostDate';

type PostSummaryProps = {
  postHeading: 'h1' | 'h2';
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export default function PostSummary({
  createdAt,
  excerpt,
  postHeading,
  postLink,
  title,
}: PostSummaryProps) {
  return (
    <div className={clsx('flex flex-col gap-4', 'sm:justify-center')}>
      <PostDate createdAt={createdAt} />

      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
