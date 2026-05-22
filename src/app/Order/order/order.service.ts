import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private httpClient = inject(HttpClient);

    getOrders() {
        const token = localStorage.getItem('token');
        return this.httpClient.get('https://localhost:7237/api/Order', {
            headers:{
                Authorization: token!
            }
        });
    }

}
