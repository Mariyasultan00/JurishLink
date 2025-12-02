import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderrComponent } from 'src/app/headerr/headerr.component';
import { FooterrComponent } from 'src/app/footerr/footerr.component';


@Component({
  selector: 'app-client1',
  templateUrl: './client1.page.html',
  styleUrls: ['./client1.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule,HeaderrComponent,FooterrComponent],
})
export class Client1Page implements OnInit {
  selectedSegment = 'overview';

  client = {
    name: 'Ananya Verma',
    occupation: 'Businesswoman',
    contact: '+91 9876543210',
    email: 'ananya.verma@email.com',
    address: 'B-12, Green Park, Delhi',
    joinedOn: 'Jan 10, 2023',
    totalCases: 8,
    activeCases: 3,
    pendingHearings: 2,
    cases: [
      { title: 'Anita vs ABC Corp', status: 'Hearing Scheduled', lastHearing: 'Oct 15, 2025' },
      { title: 'Property Settlement', status: 'Under Review', lastHearing: 'Sep 22, 2025' },
    ],
    documents: [
      { name: 'Affidavit - Case #1234' },
      { name: 'Evidence File - Case #1256' },
      { name: 'Client Agreement' },
    ],
  };

  constructor() {}

  ngOnInit() {}

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }
}
