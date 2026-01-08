import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE } from '../core/constants';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {

  private apiUrl = 'http://localhost:9093/api/bookings';

  constructor(private http: HttpClient) {}

  bookRoom(booking: any, userId: number): Observable<any> {
    return this.http.post(
      `$${API_BASE}/booking/user/${userId}`,
      booking
    );
  }

  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.apiUrl);
  }

  getBookingById(id: number) {
    return this.http.get(`${API_BASE}/bookings/${id}`);
  }

  deleteBooking(id: number) {
    return this.http.delete(`${API_BASE}/bookings/${id}`);
  }
}


// ============
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Booking } from '../models/booking.model';
// import { Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class BookingService {

//   private baseUrl = 'http://localhost:8161/api/bookings';

//   constructor(private http: HttpClient) {}

//   // Helper method to include JWT in headers
//   private getAuthHeaders(): HttpHeaders {
//     const token = localStorage.getItem('token'); // JWT stored in localStorage
//     return new HttpHeaders({
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'application/json'
//     });
//   }

//   bookRoom(userId: number, booking: Booking): Observable<Booking> {
//     const headers = this.getAuthHeaders();
//     return this.http.post<Booking>(
//       `${this.baseUrl}/user/${userId}`,
//       booking,
//       { headers }
//     );
//   }

//   getAll(): Observable<Booking[]> {
//     const headers = this.getAuthHeaders();
//     return this.http.get<Booking[]>(this.baseUrl, { headers });
//   }

//   getById(id: number): Observable<Booking> {
//     const headers = this.getAuthHeaders();
//     return this.http.get<Booking>(`${this.baseUrl}/${id}`, { headers });
//   }

//   update(id: number, booking: Booking): Observable<Booking> {
//     const headers = this.getAuthHeaders();
//     return this.http.put<Booking>(`${this.baseUrl}/${id}`, booking, { headers });
//   }

//   delete(id: number): Observable<string> {
//     const headers = this.getAuthHeaders();
//     return this.http.delete(`${this.baseUrl}/${id}`, { headers, responseType: 'text' });
//   }

//   getByType(type: string): Observable<Booking[]> {
//     const headers = this.getAuthHeaders();
//     return this.http.get<Booking[]>(`${this.baseUrl}/type/${type}`, { headers });
//   }

//   getByStatus(status: string): Observable<Booking[]> {
//     const headers = this.getAuthHeaders();
//     return this.http.get<Booking[]>(`${this.baseUrl}/status/${status}`, { headers });
//   }
// }