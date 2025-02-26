import { AfterViewInit, ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';

import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { merge, Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';

import { CartApi, Cart } from '../../../_shared/interfaces/cart';
// import { Product, ProductReview, ProductMeta } from '../../../_shared/interfaces/product';
// import { User, Hair, Address, Coordinates, Bank, Company, Crypto } from '../../../_shared/interfaces/user';

import { CartService } from '../../../_shared/services/cart.service';

@Component({
  selector: 'waters-carts',
  imports: [MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent implements AfterViewInit {
    private cartService = inject(CartService);

    displayedColumns: string[] = ['id', 'total', 'discountedTotal', 'totalProducts', 'totalQuantity'];
    displayedColumnsExpanded: string[] = [...this.displayedColumns, 'title', 'description', 'category'];
    cartsDataSource: Cart[] = [];

    resultsLength: number = 0;
    isLoadingCarts: boolean = true;
    isRateLimitReached: boolean = false;

    @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
    @ViewChild(MatSort) sort: MatSort = new MatSort();

    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

        merge(this.sort.sortChange, this.paginator.page)
        .pipe(
            startWith({}),
            switchMap(() => {
                this.isLoadingCarts = true;
                return this.getCarts();
            }),
            map(data => {
                // Flip flag to show that loading has finished.
                this.isLoadingCarts = false;
                this.isRateLimitReached = data === null;

                if (data === null) {
                    return [];
                }

                // Only refresh the result length if there is new data. In case of rate
                // limit errors, we do not want to reset the paginator to zero, as that
                // would prevent users from re-triggering requests.
                this.resultsLength = data.total;
                return data.carts;
            }),
        )
        .subscribe(data => (this.cartsDataSource = data));
    }

    getCarts(): Observable<CartApi> {
        return this.cartService.getCarts();
    }
}
