import { DrizzlePostRepository } from "./drizzle/post-repository";
import { PostRepositoryInterface } from "./interface/post-repository";

export const postRepository: PostRepositoryInterface = new DrizzlePostRepository()

