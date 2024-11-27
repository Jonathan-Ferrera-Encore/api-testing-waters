import { DummyJSON, DummyJSONApi } from './dummyjson';

export interface PostApi extends DummyJSONApi {
    posts: Posts[];
}

export interface Posts extends DummyJSON {
    title: string;
    body: string;
    tags: string[];
    reactions: PostReactions;
    views: number;
    userId: number;
}

export interface PostReactions {
    likes: number;
    dislikes: number;
}