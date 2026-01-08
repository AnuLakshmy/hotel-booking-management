import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/booking';
import { BookingService } from '../../services/booking';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-booking-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './booking-list.html',
  styleUrl: './booking-list.css',
})
export class BookingListComponent implements OnInit {

  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingService.getAllBookings()
      .subscribe(data => this.bookings = data);
  }
}
