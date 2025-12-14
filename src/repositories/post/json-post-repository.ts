import { PostModelType } from '@/models/post/post.model';
import { PostRepositoryInterface } from './interface/post-repository';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = path.resolve(ROOT_DIR, 'db', 'seed', 'post.json');

export class JsonPostRepository implements PostRepositoryInterface {
  private async readFromDisk(): Promise<Array<PostModelType>> {
    const content = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedContent = JSON.parse(content);
    const { posts } = parsedContent;
    return posts;
  }

  async findAll(): Promise<Array<PostModelType>> {
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModelType> {
    const posts = await this.findAll();
    const post = posts.find(p => p.id === id);

    if (!post) throw new Error('Post not found');

    return post;
  }
}
