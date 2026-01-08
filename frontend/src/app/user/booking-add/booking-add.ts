import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { API_BASE } from '../../core/constants';
import { Booking } from '../../models/booking';



@Component({
  selector: 'app-booking-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-add.html',
  styleUrl: './booking-add.css',
})
export class BookingAdd {

  booking: Booking = {
    customerName: '',
    email: '',
    roomId: 0,
    bookingType: 'Normal',
    checkInDate: '',
    checkOutDate: ''
  };

  constructor(private http: HttpClient) {}

  book(): void {

    // Basic validation
    if (!this.booking.customerName || !this.booking.email) {
      alert('Please fill all required fields');
      return;
    }

    this.http.post(`${API_BASE}/bookings`, this.booking)
      .subscribe({
        next: () => {
          alert('Booking successful');
          this.resetForm();
        },
        error: err => {
          console.error(err);
          alert('Booking failed');
        }
      });
  }

  resetForm(): void {
    this.booking = {
      customerName: '',
      email: '',
      roomId: 0,
      bookingType: 'Normal',
      checkInDate: '',
      checkOutDate: ''
    };
  }
}
