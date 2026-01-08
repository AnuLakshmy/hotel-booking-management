import { Routes } from '@angular/router';
import { RoomBookingComponent } from './user/room-booking/room-booking';
import { LoginComponent } from './auth/login/login';
import { authGuard } from './guards/auth.guard';
import { UserManagementComponent } from './admin/user-management/user-management';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard';
import { StaffManagement } from './admin/staff-management/staff-management';
import { BookingListComponent } from './admin/booking-list/booking-list';
import { UserDashboard } from './user/user-dashboard/user-dashboard';
import { Register } from './auth/register/register';
import { BookingAdd } from './user/booking-add/booking-add';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: Register },
  { path: 'book-room', component: BookingAdd, canActivate: [authGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'admin/users', component: UserManagementComponent },
  { path: 'admin/staff', component: StaffManagement },
  { path: 'admin/bookings', component: BookingListComponent },
  { path: 'user', component: UserDashboard, canActivate: [authGuard] },
  { path: 'book-room', component: RoomBookingComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
  
];