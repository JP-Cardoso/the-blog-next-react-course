import { formatDateTime, formatDistanceToNow } from '@/utils/formate/datetime';
import clsx from 'clsx';
import PostHeading from '../PostHeading';
import { PostModelType } from '@/models/post/post.model';

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
      <time
        className={clsx('text-slate-600 block text-sm/tight')}
        dateTime={createdAt}
        title={formatDistanceToNow(createdAt)}
      >
        {formatDateTime(createdAt)}
      </time>
      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
