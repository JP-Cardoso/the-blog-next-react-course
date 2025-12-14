import { PostModelType } from '@/models/post/post.model';

export interface PostRepositoryInterface {
  findAll(): Promise<Array<PostModelType>>;
  findById(id: string): Promise<PostModelType>
}
