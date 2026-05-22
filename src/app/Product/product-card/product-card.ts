import { Component, input, inject, signal } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../../Cart/cart/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();
  cartService = inject(CartService);
  showAlert = signal(false);
  private alertTimeout: any;

  addToCart() {
    this.cartService.addToCart(this.product().id, 1).subscribe(() => {
      this.showAlert.set(true);
      
      if (this.alertTimeout) {
        clearTimeout(this.alertTimeout);
      }
      
      this.alertTimeout = setTimeout(() => {
        this.showAlert.set(false);
      }, 5000);
    });
  }

  closeAlert() {
    this.showAlert.set(false);
    if (this.alertTimeout) {
      clearTimeout(this.alertTimeout);
    }
  }
}
