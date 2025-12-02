import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderrComponent } from 'src/app/headerr/headerr.component';
import { FooterrComponent } from 'src/app/footerr/footerr.component';

@Component({
  selector: 'app-client3',
  templateUrl: './client3.page.html',
  styleUrls: ['./client3.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, HeaderrComponent, FooterrComponent],
})
export class Client3Page implements OnInit {
  
  selectedSegment: string = 'overview';

  client = {
    name: 'Rahul Singh',
    occupation: 'Civil Engineer',
    contact: '+91 9700456789',
    email: 'rahul.singh@email.com',
    address: 'Sector 22, Noida, Uttar Pradesh',
    joinedOn: 'November 12, 2021',
    totalCases: 6,
    activeCases: 3,
    pendingHearings: 2,
    cases: [
      { title: 'Rahul Singh vs City Construction Co.', status: 'Final Arguments', lastHearing: 'Oct 28, 2025' },
      { title: 'Property Boundary Dispute', status: 'Under Investigation', lastHearing: 'Sep 30, 2025' },
      { title: 'Builder Delay Compensation', status: 'Evidence Stage', lastHearing: 'Oct 5, 2025' },
    ],
    documents: [
      { name: 'Land Ownership Deed' },
      { name: 'Architectural Blueprints' },
      { name: 'Court Summons - Case #4587' },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  segmentChanged(event: any): void {
    this.selectedSegment = event.detail.value;
  }
}
