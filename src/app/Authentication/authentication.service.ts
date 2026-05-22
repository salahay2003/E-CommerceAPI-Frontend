import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private httpClient = inject(HttpClient);

    login(email: string, password: string) {
        return this.httpClient.post('https://localhost:7237/api/Authentication/Login',
            {
                "email": email,
                "password": password

            })
    }

}
