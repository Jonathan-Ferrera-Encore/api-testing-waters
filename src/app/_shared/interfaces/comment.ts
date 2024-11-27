import { DummyJSON, DummyJSONApi } from './dummyjson';

export interface CommentApi extends DummyJSONApi {
    comments: Comments[];
}

export interface Comments extends DummyJSON {
    body: string;
    postId: number;
    likes: number;
    user: CommentUsers;
}

export interface CommentUsers extends DummyJSON {
    username: string;
    fullName: string;
}