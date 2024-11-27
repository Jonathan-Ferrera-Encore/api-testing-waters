import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { retry, take, takeUntil } from 'rxjs/operators';

import { LoginRequest, LoginResponse } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class DummyJSONApiService {
    protected baseUrl: string = 'https://dummyjson.com';
    constructor(protected http: HttpClient) { }

    login(loginRequest: LoginRequest): Observable<LoginResponse> {
        const destruct: Observable<0> = timer(5000);

        const headers = {'content-type': 'application/json'};
        const body = JSON.stringify(loginRequest);

        return this.http.post<LoginResponse>(this.baseUrl + '/auth/login', body, {'headers': headers}).pipe(takeUntil(destruct), take(1), retry(1));
    }
}
