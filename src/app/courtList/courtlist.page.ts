import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderrComponent } from '../headerr/headerr.component';
import { FooterrComponent } from '../footerr/footerr.component';

@Component({
  selector: 'app-courtlist',
  templateUrl: './courtlist.page.html',
  styleUrls: ['./courtlist.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, HeaderrComponent, FooterrComponent]
})
export class CourtListPage {
  searchTerm: string = '';
  filteredCourts: any[] = [];

  courts = [
    // 🔹 Supreme Court
    {
      name: 'Supreme Court of India',
      type: 'Apex Court',
      location: 'New Delhi',
      jurisdiction: 'Entire India',
      state: 'National'
    },
    // 🔹 State High Courts
    {
      name: 'Bombay High Court',
      type: 'High Court',
      location: 'Mumbai, Maharashtra',
      jurisdiction: 'State of Maharashtra & Goa',
      state: 'Maharashtra'
    },
    {
      name: 'Delhi High Court',
      type: 'High Court',
      location: 'New Delhi',
      jurisdiction: 'National Capital Territory of Delhi',
      state: 'Delhi'
    },
    {
      name: 'Calcutta High Court',
      type: 'High Court',
      location: 'Kolkata, West Bengal',
      jurisdiction: 'State of West Bengal & Andaman Nicobar',
      state: 'West Bengal'
    },
    {
      name: 'Madras High Court',
      type: 'High Court',
      location: 'Chennai, Tamil Nadu',
      jurisdiction: 'State of Tamil Nadu & Puducherry',
      state: 'Tamil Nadu'
    },
    {
      name: 'Kerala High Court',
      type: 'High Court',
      location: 'Kochi, Kerala',
      jurisdiction: 'State of Kerala & Lakshadweep',
      state: 'Kerala'
    },
    // 🔹 District Courts (examples)
    {
      name: 'Pune District Court',
      type: 'District Court',
      location: 'Pune, Maharashtra',
      jurisdiction: 'Pune District',
      state: 'Maharashtra'
    },
    {
      name: 'Lucknow District Court',
      type: 'District Court',
      location: 'Lucknow, Uttar Pradesh',
      jurisdiction: 'Lucknow District',
      state: 'Uttar Pradesh'
    },
    {
      name: 'Ernakulam District Court',
      type: 'District Court',
      location: 'Ernakulam, Kerala',
      jurisdiction: 'Ernakulam District',
      state: 'Kerala'
    }
  ];

  constructor() {
    this.filteredCourts = this.courts; // show all courts by default
  }

  // 🔍 Filter Function
  filterCourts() {
    const term = this.searchTerm.toLowerCase();
    this.filteredCourts = this.courts.filter(court =>
      court.state.toLowerCase().includes(term) ||
      court.name.toLowerCase().includes(term) ||
      court.location.toLowerCase().includes(term)
    );
  }
}
