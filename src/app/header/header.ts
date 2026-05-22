import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private router: Router) { }
  goToCart() {
    this.router.navigate(['/cart']);
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToHome() {
    this.router.navigate(['']);
  }
  goToOrders()
  {
    this.router.navigate(['/orders']);
  }
}
