import { DummyJSON, DummyJSONApi } from './dummyjson';

export interface CartApi extends DummyJSONApi {
    carts: Cart[];
}

export interface Cart extends DummyJSON {
    products: CartProduct[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}

export interface CartProduct extends DummyJSON {
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string;
}