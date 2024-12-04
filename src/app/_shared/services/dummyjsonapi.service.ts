import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { catchError, retry, take, takeUntil } from 'rxjs/operators';

import { LoginRequest, LoginResponse, RefreshRequest, RefreshResponse } from '../interfaces/auth';

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

        return this.http.post<LoginResponse>(this.baseUrl + '/auth/login', body, {'headers': headers}).pipe(
            takeUntil(destruct), 
            take(1), 
            retry(1), 
            catchError(e => of(e.message))
        );
    }

    refresh(refreshRequest: RefreshRequest): Observable<RefreshResponse> {
        const destruct: Observable<0> = timer(5000);

        const headers = {'content-type': 'application/json'};
        const body = JSON.stringify(refreshRequest);

        return this.http.post<RefreshResponse>(this.baseUrl + '/auth/refresh', body, {'headers': headers}).pipe(
            takeUntil(destruct), 
            take(1), 
            retry(1), 
            catchError(e => of(e.message))
        );
    }
}
