import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, HeaderComponent, FooterComponent],
})
export class Tab5Page implements OnInit {
  caseSchedules = [
    { title: 'Property Dispute Hearing', date: '15 Sept 2025', time: '10:00 AM', status: 'Scheduled' },
    { title: 'Contract Review', date: '18 Sept 2025', time: '2:30 PM', status: 'In Progress' },
    { title: 'Divorce Settlement', date: '21 Sept 2025', time: '11:15 AM', status: 'Completed' },
    { title: 'Criminal Case Trial', date: '25 Sept 2025', time: '9:00 AM', status: 'Scheduled' },
  ];

  constructor() {}

  ngOnInit() {}

  getColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed': return 'success';
      case 'in progress': return 'warning';
      case 'scheduled': return 'primary';
      default: return 'medium';
    }
  }

  getIcon(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed': return 'checkmark-circle-outline';
      case 'in progress': return 'time-outline';
      case 'scheduled': return 'calendar-outline';
      default: return 'alert-circle-outline';
    }
  }
}
