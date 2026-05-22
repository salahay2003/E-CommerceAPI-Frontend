import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../product.service.api';
import { ProductCard } from "../product-card/product-card";
import { Product } from '../product.model';

@Component({
  selector: 'app-product-container',
  imports: [ProductCard],
  templateUrl: './product-container.html',
  styleUrl: './product-container.css',
})
export class ProductContainer {
  private productService = inject(ProductService);
  products = signal<Product[]>([]);

  ngOnInit() {
    this.productService.fetchProducts().subscribe({
      next: (resData) => {
        this.products.set(resData.data ?? []);
      }
    });
  }

}
