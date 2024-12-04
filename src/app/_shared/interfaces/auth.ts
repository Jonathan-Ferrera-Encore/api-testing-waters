import { DummyJSON } from './dummyjson';

export interface LoginRequest {
    username: string;
    password: string;
    expiresInMins: number;
}

export interface LoginResponse extends DummyJSON {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string;
    refreshToken: string;
}

export interface RefreshRequest {
    refreshToken: string;
    expiresInMins: number;
}
export interface RefreshResponse {
    accessToken: string;
    refreshToken: string;
}