import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { retry, take, takeUntil } from 'rxjs/operators';

import { JsonPlaceholderPost } from '../interfaces/jsonplaceholder';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderApiService {
    protected baseUrl: string = 'https://jsonplaceholder.typicode.com';
    constructor(protected http: HttpClient) { }

    getPosts(): Observable<JsonPlaceholderPost[]> {
        const destruct: Observable<0> = timer(5000);
        return this.http.get<JsonPlaceholderPost[]>(this.baseUrl + '/posts').pipe(takeUntil(destruct), take(1), retry(1));
    }

    getPostsById(id: number): Observable<JsonPlaceholderPost> {
        const destruct: Observable<0> = timer(5000);
        return this.http.get<JsonPlaceholderPost>(this.baseUrl + '/posts/' + id).pipe(takeUntil(destruct), take(1), retry(1));
    }

    postPosts(jsonPlaceholderPost: JsonPlaceholderPost): Observable<JsonPlaceholderPost> {
        const destruct: Observable<0> = timer(5000);
        return this.http.post<JsonPlaceholderPost>(this.baseUrl + '/posts', jsonPlaceholderPost).pipe(takeUntil(destruct), take(1), retry(1));
    }
}
