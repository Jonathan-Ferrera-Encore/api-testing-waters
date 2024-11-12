export interface JsonPlaceholderApi {
    
}
export interface JsonPlaceholder {
    id: number;
}
export interface JsonPlaceholderAlbum extends JsonPlaceholder {
    userId: number;
    title: string;
}
export interface JsonPlaceholderComment extends JsonPlaceholder {
    postId: number;
    name: string;
    email: string;
    body: string;
}
export interface JsonPlaceholderPhoto extends JsonPlaceholder {
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
export interface JsonPlaceholderPost extends JsonPlaceholder {
    userId: number;
    title: string;
    body: string;
}
export interface JsonPlaceholderTodo extends JsonPlaceholder {
    userId: number;
    title: string;
    completed: boolean;
}
export interface JsonPlaceholderUser extends JsonPlaceholder {
    name: string;
    username: string;
    email: string;
    address: JsonPlaceholderUserAddress;
    phone: string;
    website: string;
    company: JsonPlaceholderUserCompany;
}
export interface JsonPlaceholderUserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: JsonPlaceholderUserAddressGeo
}
export interface JsonPlaceholderUserAddressGeo {
    lat: string;
    lng: string;
}
export interface JsonPlaceholderUserCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}