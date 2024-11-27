import { DummyJSON, DummyJSONApi } from './dummyjson';

export interface QuoteApi extends DummyJSONApi {
    quotes: Quotes[];
}

export interface Quotes extends DummyJSON {
    quote: string;
    author: string;
}