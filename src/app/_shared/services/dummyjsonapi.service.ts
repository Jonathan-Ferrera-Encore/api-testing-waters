import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { retry, take, takeUntil } from 'rxjs/operators';

import { DummyJSONUserApi } from '../interfaces/dummyjson';

@Injectable({
  providedIn: 'root'
})
export class DummyJSONApiService {
    protected baseUrl: string = 'https://dummyjson.com';
    constructor(protected http: HttpClient) { }

    getUsers(): Observable<DummyJSONUserApi> {
        const destruct: Observable<0> = timer(5000);
        return this.http.get<DummyJSONUserApi>(this.baseUrl + '/users').pipe(takeUntil(destruct), take(1), retry(1));
    }
}
