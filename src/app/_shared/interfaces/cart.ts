import { DummyJSON, DummyJSONApi } from './dummyjson';

export interface CartApi extends DummyJSONApi {
    carts: Carts[];
}

export interface Carts extends DummyJSON {
    products: CartProducts[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}

export interface CartProducts extends DummyJSON {
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string;
}