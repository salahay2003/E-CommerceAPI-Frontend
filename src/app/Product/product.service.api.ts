import { Injectable, inject } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from './respone.model';
@Injectable({
    providedIn: 'root'
})
export class ProductService {
    products!: Product[];
    private httpClient = inject(HttpClient);

    fetchProducts(){
        return this.httpClient.get<ApiResponse<Product[]>>('https://localhost:7237/api/Product/GetAll')
    }

}
