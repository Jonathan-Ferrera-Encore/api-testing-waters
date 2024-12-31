import { DummyJSON, DummyJSONApi } from './dummyjson';

export interface TodoApi extends DummyJSONApi {
    todos: Todo[];
}

export interface Todo extends DummyJSON {
    todo: string;
    completed: boolean;
    userId: number;
}