export interface DummyJSONApi {
    total: number;
    skip: number;
    limit: number;
}
export interface DummyJSON {
    id: number;
}

export interface DummyJSONAuthLogin extends DummyJSON {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string;
    refreshToken: string;
}

export interface DummyJSONAuthRefresh {
    accessToken: string;
    refreshToken: string;
}

export interface DummyJSONCartApi extends DummyJSONApi {
    carts: DummyJSONCarts[];
}

export interface DummyJSONCarts extends DummyJSON {
    products: DummyJSONCartProducts[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}

export interface DummyJSONCartProducts extends DummyJSON {
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string;
}

export interface DummyJSONCommentApi extends DummyJSONApi {
    comments: DummyJSONComments[];
}

export interface DummyJSONComments extends DummyJSON {
    body: string;
    postId: number;
    likes: number;
    user: DummyJSONCommentUsers;
}

export interface DummyJSONCommentUsers extends DummyJSON {
    username: string;
    fullName: string;
}

export interface DummyJSONPostApi extends DummyJSONApi {
    posts: DummyJSONPosts[];
}

export interface DummyJSONPosts extends DummyJSON {
    title: string;
    body: string;
    tags: string[];
    reactions: DummyJSONPostReactions;
    views: number;
    userId: number;
}

export interface DummyJSONPostReactions {
    likes: number;
    dislikes: number;
}

export interface DummyJSONProductApi extends DummyJSONApi {
    products: DummyJSONProducts[];
}

export interface DummyJSONProducts extends DummyJSON {
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
    reviews: DummyJSONProductReviews[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    images: string[];
    thumbnail: string;
}

export interface DummyJSONProductReviews {
    rating: number;
    comment: string;
    date: Date;
    reviewerName: string;
    reviewerEmail: string;
}

export interface DummyJSONProductMeta {
    createdAt: Date;
    updatedAt: Date;
    barcode: string;
    qrCode: string;
}

export interface DummyJSONQuoteApi extends DummyJSONApi {
    quotes: DummyJSONQuotes[];
}

export interface DummyJSONQuotes extends DummyJSON {
    quote: string;
    author: string;
}

export interface DummyJSONRecipeApi extends DummyJSONApi {
    recipes: DummyJSONRecipes[];
}

export interface DummyJSONRecipes extends DummyJSON {
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}

export interface DummyJSONTodoApi extends DummyJSONApi {
    todos: DummyJSONTodos[];
}

export interface DummyJSONTodos extends DummyJSON {
    todo: string;
    completed: boolean;
    userId: number;
}

export interface DummyJSONUserApi extends DummyJSONApi {
    users: DummyJSONUsers[];
}

export interface DummyJSONUsers extends DummyJSON {
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: DummyJSONUserHair;
    ip: string;
    address: DummyJSONAddresses;
    macAddress: string;
    university: string;
    bank: DummyJSONBanks;
    company: DummyJSONCompanies;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: DummyJSONCrypto;
    role: string;
}

export interface DummyJSONUserHair {
    color: string;
    type: string;
}

export interface DummyJSONAddresses {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: DummyJSONCoordinates;
    country: string;
}

export interface DummyJSONCoordinates {
    lat: number;
    lng: number;
}

export interface DummyJSONBanks {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

export interface DummyJSONCompanies {
    department: string;
    name: string;
    title: string;
    address: DummyJSONAddresses;
}

export interface DummyJSONCrypto {
    coin: string;
    wallet: string;
    network: string;
}