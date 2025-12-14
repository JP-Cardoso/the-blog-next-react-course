import { PostRepositoryInterface } from "./interface/post-repository";
import { JsonPostRepository } from "./json-post-repository";

export const postRepository: PostRepositoryInterface = new JsonPostRepository()
