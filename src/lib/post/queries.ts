import { PostModelType } from '@/models/post/post.model';
import { postRepository } from '@/repositories/post';
import { cache } from 'react';

export const findAllPublicPosts = cache(
  async (): Promise<Array<PostModelType>> => {
    return postRepository.findAllPublic();
  },
);
