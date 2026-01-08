import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login({ username: this.username, password: this.password })
      .subscribe({
        next: () => {
          const role = this.auth.getUserRole();

          if (role === 'ADMIN') {
            this.router.navigate(['/admin']);
          } else if (role === 'USER') {
            this.router.navigate(['/user']);
          } else {
            this.router.navigate(['/book-room']);
          }
        },
        error: () => alert('Invalid credentials')
      });
  }
}