import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../services/staff';
import { Staff } from '../../models/staff';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-staff-management',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './staff-management.html',
  styleUrl: './staff-management.css',
})


export class StaffManagement implements OnInit {

  staffList: Staff[] = [];

  constructor(private staffService: StaffService) {}

  ngOnInit(): void {
    this.loadStaff();
  }

  loadStaff(): void {
    this.staffService.getAllStaff().subscribe(data => {
      this.staffList = data;
    });
  }

  deleteStaff(staffId: number): void {
    if (confirm('Are you sure?')) {
      this.staffService.deleteStaff(staffId).subscribe(() => {
        this.loadStaff();
      });
    }
  }
}