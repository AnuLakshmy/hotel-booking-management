import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE } from '../core/constants';

@Injectable({
  providedIn: 'root',
})
export class AdminService {

  constructor(private http: HttpClient) {}

  registerStaff(staff: any) {
    return this.http.post(`${API_BASE}/admin/staff/register`, staff);
  }

  getAllStaff() {
    return this.http.get(`${API_BASE}/admin/staff`);
  }

  deleteStaff(id: number) {
    return this.http.delete(`${API_BASE}/admin/staff/${id}`);
  }

  getAllUsers() {
    return this.http.get(`${API_BASE}/admin/users`);
  }

  deleteUser(id: number) {
    return this.http.delete(`${API_BASE}/admin/user/${id}`);
  }

  getAllBookings() {
    return this.http.get(`${API_BASE}/bookings`);
  }
}
