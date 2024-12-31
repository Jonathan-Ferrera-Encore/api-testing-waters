import { DummyJSON, DummyJSONApi } from './dummyjson';

export interface QuoteApi extends DummyJSONApi {
    quotes: Quote[];
}

export interface Quote extends DummyJSON {
    quote: string;
    author: string;
}