import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { catchError, retry, take, takeUntil } from 'rxjs/operators';

import { SessionStorageService } from '../../_core/services/session-storage.service';
import { CartApi, Cart, CartProduct } from '../interfaces/cart';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    protected baseUrl: string = 'https://dummyjson.com';
    protected http: HttpClient = inject(HttpClient);
    private sessionStorageService: SessionStorageService = inject(SessionStorageService);
    
    constructor() { }

    getCarts(): Observable<CartApi> {
        const destruct: Observable<0> = timer(5000);

        let refreshJson: string|null = this.sessionStorageService.getItem('refresh');
        let accessToken: string|null = JSON.parse(refreshJson || '').accessToken;

        const headers = {'Authorization': 'Bearer ' + accessToken, 'content-type': 'application/json'};

        return this.http.get<CartApi>(this.baseUrl + '/auth/carts', {'headers': headers}).pipe(
            takeUntil(destruct), 
            take(1), 
            retry(1), 
            catchError(e => of(e.message))
        );
    }

    getCart(id: number): Observable<CartApi> {
        const destruct: Observable<0> = timer(5000);

        let refreshJson: string|null = this.sessionStorageService.getItem('refresh');
        let accessToken: string|null = JSON.parse(refreshJson || '').accessToken;

        const headers = {'Authorization': 'Bearer ' + accessToken, 'content-type': 'application/json'};

        return this.http.get<CartApi>(this.baseUrl + '/auth/carts/' + id, {'headers': headers}).pipe(
            takeUntil(destruct), 
            take(1), 
            retry(1), 
            catchError(e => of(e.message))
        );
    }
}
