export interface Booking {
  bookingId?: number;
  customerName: string;
  email: string;
  roomId: number;
  bookingType: string;     // Premium / Normal
  checkInDate: string;     // yyyy-MM-dd
  checkOutDate: string;
  fare?: number;
  status?: string;
}