import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { CartItem } from './cartItem.model';
@Component({
  selector: 'app-cart',
  imports: [FormsModule, CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartService = inject(CartService);

  ngOnInit() {
    this.cartService.getUserCart().subscribe((response: any) => {
      console.log(response);
      const cartItems: CartItem[] = response?.data?.cartItems ?? response?.cartItem ?? [];
      this.products.set(cartItems);
    });
  }
  showAddress = false;
  products = signal<CartItem[]>([]);
  toggleAddress() {
    this.showAddress = !this.showAddress;
  }

  removeProduct(index: number) {
    this.products.update(products => products.filter((_, i) => i !== index));
    this.cartService.removeFromCart(index).subscribe();
  }
}
