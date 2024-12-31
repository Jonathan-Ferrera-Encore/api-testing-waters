import { DummyJSON, DummyJSONApi } from './dummyjson';

export interface CommentApi extends DummyJSONApi {
    comments: Comment[];
}

export interface Comment extends DummyJSON {
    body: string;
    postId: number;
    likes: number;
    user: CommentUser;
}

export interface CommentUser extends DummyJSON {
    username: string;
    fullName: string;
}