import { Routes } from '@angular/router';

import { ProductContainer } from './Product/product-container/product-container';
import { Order } from './Order/order/order'
import { Cart } from './Cart/cart/cart';
import { Login } from './Authentication/Login/login/login'



export const routes: Routes = [
    {
        path: '',
        component: ProductContainer
    },
    {
        path: 'orders',
        component: Order
    },
    {
        path: 'cart',
        component: Cart
    },
    {
        path: 'login',
        component: Login
    }
];
