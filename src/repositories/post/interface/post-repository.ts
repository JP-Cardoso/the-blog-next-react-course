import { PostModelType } from '@/models/post/post.model';

export interface PostRepositoryInterface {
  findAllPublic(): Promise<Array<PostModelType>>;
  findAll(): Promise<Array<PostModelType>>;
  findById(id: string): Promise<PostModelType>;
  findBySlugPublic(slug: string): Promise<PostModelType>;
}
