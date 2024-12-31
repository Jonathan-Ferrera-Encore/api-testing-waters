import { DummyJSON, DummyJSONApi } from './dummyjson';

export interface ProductApi extends DummyJSONApi {
    products: Product[];
}

export interface Product extends DummyJSON {
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: number[];
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: ProductReview[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: ProductMeta;
    images: string[];
    thumbnail: string;
}

export interface ProductReview {
    rating: number;
    comment: string;
    date: Date;
    reviewerName: string;
    reviewerEmail: string;
}

export interface ProductMeta {
    createdAt: Date;
    updatedAt: Date;
    barcode: string;
    qrCode: string;
}