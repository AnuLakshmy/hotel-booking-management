import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })

export class AdminService {

  private baseUrl = 'http://localhost:9090/api/admin';

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  deleteUser(userId: number) {
    return this.http.delete(`${this.baseUrl}/users/${userId}`);
  }
}