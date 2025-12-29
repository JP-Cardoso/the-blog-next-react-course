import { cache } from 'react';
import { notFound } from 'next/navigation';
import { PostModelType } from '@/models/post/post.model';
import { postRepository } from '@/repositories/post';

export const findAllPublicPostsCached = cache(
  async (): Promise<Array<PostModelType>> => {
    return postRepository.findAllPublic();
  },
);

export const findPostBySlugCached = cache(
  async (slug: string): Promise<PostModelType> => {
    const post = await postRepository.findBySlug(slug).catch(() => undefined);

    if (!post) notFound();

    return post;
  },
);

export const findPostByIdCached = cache(
  async (id: string): Promise<PostModelType> => {
    return postRepository.findById(id);
  },
);
