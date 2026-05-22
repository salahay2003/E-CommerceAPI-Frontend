import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  authService = inject(AuthenticationService);
  userPassword!: string;
  userEmail!: string;
  constructor(private router: Router) {}
  Login() {
    this.authService.login(this.userEmail, this.userPassword).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', 'Bearer ' + response.accessToken);
      },

      error: (err) => {
        console.log(err);
      }
    });
    this.goToHome();
  }

  goToHome(){
    this.router.navigate(['']);
  }

  
}
