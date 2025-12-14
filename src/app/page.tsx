import { Suspense } from 'react';
import PostsList from '@/components/PostsList';
import SpinLoader from '@/components/SpinLoader';
import Container from '@/components/Container';

export default async function HomePage() {
  return (
    <Container>
      <header>
        <h1 className='text-6xl font-bold text-center py-8'>Header</h1>
        <p className='text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim
          eligendi? Velit nihil sint, autem excepturi, dolorem similique
          blanditiis asperiores esse odit quaerat distinctio ex architecto nulla
          corrupti eos nobis! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Commodi, enim eligendi? Velit nihil sint, autem excepturi,
          dolorem similique blanditiis asperiores esse odit quaerat distinctio
          ex architecto nulla corrupti eos nobis!
        </p>
      </header>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className='text-6xl font-bold text-center py-8'>Footer</p>
      </footer>
    </Container>
  );
}
