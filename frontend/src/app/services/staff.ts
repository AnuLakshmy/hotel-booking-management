import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staff } from '../models/staff';

@Injectable({
  providedIn: 'root',
})

export class StaffService {

  private apiUrl = 'http://localhost:9090/api/admin/staff';

  constructor(private http: HttpClient) {}

  getAllStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.apiUrl);
  }

  deleteStaff(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}