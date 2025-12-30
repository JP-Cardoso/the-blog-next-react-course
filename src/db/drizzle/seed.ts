import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzleDb } from '.';
import { postsTable } from './schemas';

(async () => {
  const jsonPostRepository = new JsonPostRepository();

  const posts = await jsonPostRepository.findAll();

  try {
    await drizzleDb.insert(postsTable).values(posts);
    console.log('Deu certo');
  } catch (error) {
    console.log('Ocorreu um erro', error);
  }
})();
