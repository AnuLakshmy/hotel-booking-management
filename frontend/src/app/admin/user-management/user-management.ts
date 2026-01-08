import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin';
import { User } from '../../models/user';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-management.html'
})
export class UserManagementComponent implements OnInit {

  users: User[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.adminService.getAllUsers().subscribe({
      next: (data: User[]) => {
        console.log('USERS:', data); // 👈 must print array
        this.users = data;
      },
      error: err => console.error(err)
    });
  }

  deleteUser(userId: number): void {
    if (confirm('Are you sure?')) {
      this.adminService.deleteUser(userId).subscribe(() => {
        this.loadUsers();
      });
    }
  }
}