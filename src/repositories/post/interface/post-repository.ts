import { PostModelType } from '@/models/post/post.model';

export interface PostRepositoryInterface {
  findAllPublic(): Promise<Array<PostModelType>>;
  findById(id: string): Promise<PostModelType>;
}
