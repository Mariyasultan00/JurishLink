import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderrComponent } from 'src/app/headerr/headerr.component';
import { FooterrComponent } from 'src/app/footerr/footerr.component';

@Component({
  selector: 'app-client2',
  templateUrl: './client2.page.html',
  styleUrls: ['./client2.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, HeaderrComponent, FooterrComponent],
})
export class Client2Page implements OnInit {
  
  selectedSegment: string = 'overview';

  client = {
    name: 'Rohit Sharma',
    occupation: 'Entrepreneur',
    contact: '+91 9812345678',
    email: 'rohit.sharma@email.com',
    address: 'A-45, Bandra West, Mumbai, Maharashtra',
    joinedOn: 'March 22, 2022',
    totalCases: 5,
    activeCases: 2,
    pendingHearings: 1,
    cases: [
      {
        title: 'Rohit Sharma vs Global Builders Pvt Ltd',
        status: 'Cross Examination',
        lastHearing: 'Oct 25, 2025'
      },
      {
        title: 'Tax Compliance Matter',
        status: 'Awaiting Documentation',
        lastHearing: 'Sep 10, 2025'
      },
    ],
    documents: [
      { name: 'GST Filing Documents' },
      { name: 'Company Registration Papers' },
      { name: 'Power of Attorney' },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  segmentChanged(event: any): void {
    this.selectedSegment = event.detail.value;
  }
}
