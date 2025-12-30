import { PostModelType } from '@/models/post/post.model';
import { PostRepositoryInterface } from './interface/post-repository';
import { readFile } from 'fs/promises';
import { resolve } from 'node:path';

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);
const SIMULATE_WAIT_IN_MS = 0;

export class JsonPostRepository implements PostRepositoryInterface {
  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;

    await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  private async readFromDisk(): Promise<Array<PostModelType>> {
    const content = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedContent = JSON.parse(content);
    const { posts } = parsedContent;
    return posts;
  }

  async findAllPublic(): Promise<Array<PostModelType>> {
    await this.simulateWait();

    const posts = await this.readFromDisk();
    return posts.filter(post => post.published);
  }

  async findAll(): Promise<Array<PostModelType>> {
    await this.simulateWait();

    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModelType> {
    // await this.simulateWait();

    const posts = await this.findAllPublic();
    const post = posts.find(p => p.id === id);

    if (!post) throw new Error('Post not found');

    return post;
  }

  async findBySlugPublic(slug: string): Promise<PostModelType> {
    // await this.simulateWait();

    const posts = await this.findAllPublic();
    const post = posts.find(p => p.slug === slug);

    if (!post) throw new Error('Post not found');

    return post;
  }
}
