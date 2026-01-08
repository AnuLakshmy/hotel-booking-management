import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserId(): number {
    const token = this.getToken();
    if (!token) {
      throw new Error('Token not found');
    }

    const decoded: any = jwtDecode(token);
    return decoded.userId; // must match backend JWT field
  }
}