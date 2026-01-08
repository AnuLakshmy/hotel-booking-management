import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: './admin-dashboard.html',
  imports: [CommonModule, RouterModule],
})
export class AdminDashboardComponent {}