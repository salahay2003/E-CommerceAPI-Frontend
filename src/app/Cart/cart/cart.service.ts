import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class CartService {
    private httpClient = inject(HttpClient);

    getUserCart() {
        const token = localStorage.getItem('token');
        return this.httpClient.get('https://localhost:7237/api/Cart',{
            headers: {
                "Authorization": token!
            }
        })
    }
    addToCart(productId: number, quantity: number) {
        const token = localStorage.getItem('token');
        return this.httpClient.post('https://localhost:7237/api/Cart', {
            productId,
            quantity
        }, {
            headers: {
                "Authorization": token!
            }
        });
    }
    removeFromCart(productId: number) {
        const token = localStorage.getItem('token');
        return this.httpClient.delete(`https://localhost:7237/api/Cart/${productId}`, {
            headers: {
                "Authorization": token!
            }
        });
    }

}
