import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from './order.service';
@Component({
  selector: 'app-order',
  imports: [CommonModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  boxIcon =
    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/boxIcon.svg';

  orderService = inject(OrderService);
  ngOnInit() {
    this.orderService.getOrders().subscribe((response: any) => {
      console.log(response);
      this.orders.set(response?.data ?? response);
    });
  }
  orders = signal<any[]>([]);
}
