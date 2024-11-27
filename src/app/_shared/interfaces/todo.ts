import { DummyJSON, DummyJSONApi } from './dummyjson';

export interface TodoApi extends DummyJSONApi {
    todos: Todos[];
}

export interface Todos extends DummyJSON {
    todo: string;
    completed: boolean;
    userId: number;
}