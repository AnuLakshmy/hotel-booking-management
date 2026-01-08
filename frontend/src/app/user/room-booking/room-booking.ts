import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../../services/booking';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './room-booking.html'
})
export class RoomBookingComponent {

  booking = {
    roomId: 0,
    checkInDate: '',
    checkOutDate: ''
  };

  constructor(
    private bookingService: BookingService,
    private authService: AuthService
  ) {}

  book(): void {
    const userId = this.authService.getUserId(); // JWT → userId

    this.bookingService.bookRoom(this.booking, userId)
      .subscribe({
        next: () => alert('Room booked successfully'),
        error: () => alert('Booking failed')
      });
  }
}