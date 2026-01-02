import { formatDateTime, formatDistanceToNow } from '@/utils/formate/datetime';
import clsx from 'clsx';

type PostDateProps = {
  createdAt: string;
};

export default function PostDate({ createdAt }: PostDateProps) {
  if (!createdAt) return '';

  return (
    <time
      className={clsx('text-slate-600 text-sm/tight')}
      dateTime={createdAt}
      title={formatDistanceToNow(createdAt)}
    >
      {formatDateTime(createdAt)}
    </time>
  );
}
