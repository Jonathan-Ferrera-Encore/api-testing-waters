import { Component } from '@angular/core';

import { CartApi, Cart, CartProduct} from '../../../_shared/interfaces/cart';
import { Product, ProductReview, ProductMeta } from '../../../_shared/interfaces/product';
import { User, Hair, Address, Coordinates, Bank, Company, Crypto } from '../../../_shared/interfaces/user';

@Component({
  selector: 'waters-carts',
  imports: [],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent {
    displayedColumns: string[] = ['total', 'discountedTotal', 'totalProducts', 'totalQuantity'];
    displayedColumnsExpanded: string[] = [...this.displayedColumns, 'title', 'description', 'category'];
    // cartsDataSource =
}
