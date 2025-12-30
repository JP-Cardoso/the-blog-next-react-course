import { PostModelType } from '@/models/post/post.model';
import { PostRepositoryInterface } from '../interface/post-repository';
import { drizzleDb } from '@/db/drizzle';

export class DrizzlePostRepository implements PostRepositoryInterface {
  async findAllPublic(): Promise<Array<PostModelType>> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModelType> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error('Post not found by slug');

    return post;
  }

  async findAll(): Promise<Array<PostModelType>> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }

  async findById(id: string): Promise<PostModelType> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error('Post not found by id');

    return post;
  }
}

// (async () => {
// const repo = new DrizzlePostRepository();
//
// const result = await repo.findAllPublic();
// console.log(result);
// })();
