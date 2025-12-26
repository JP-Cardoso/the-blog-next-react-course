import { Suspense } from 'react';
import PostFeatured from '@/components/PostFeatured';
import PostsList from '@/components/PostsList';
import SpinLoader from '@/components/SpinLoader';

export default async function HomePage() {
  return (
    <>
      <PostFeatured />

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </>
  );
}
