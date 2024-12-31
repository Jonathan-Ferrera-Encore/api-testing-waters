import { DummyJSON, DummyJSONApi } from './dummyjson';

export interface PostApi extends DummyJSONApi {
    posts: Post[];
}

export interface Post extends DummyJSON {
    title: string;
    body: string;
    tags: string[];
    reactions: PostReaction;
    views: number;
    userId: number;
}

export interface PostReaction {
    likes: number;
    dislikes: number;
}