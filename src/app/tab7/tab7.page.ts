import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router'; // ✅ import Router for navigation

import { FooterrComponent } from '../footerr/footerr.component';
import { HeaderrComponent } from '../headerr/headerr.component';

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterrComponent,
    HeaderrComponent,
  
  ],
})
export class Tab7Page implements OnInit {
  searchQuery: string = '';
  selectedFilter: string = 'ALL';

  clients = [
    {
      id: 1,
      name: 'Ananya Verma',
      caseType: 'Family Law',
      status: 'Active',
      nextHearing: 'Nov 12, 2025',
      image: 'assets/client1.jpeg',
      amount: 500,
    },
    {
      id: 2,
      name: 'Rohit Sharma',
      caseType: 'Commercial Law',
      status: 'Pending',
      nextHearing: 'Nov 20, 2025',
      image: 'assets/client2.jpeg',
      amount: 300,
    },
    {
      id: 3,
      name: 'Rahul Singh',
      caseType: 'Criminal Law',
      status: 'Closed',
      nextHearing: 'Completed',
      image: 'assets/client3.jpeg',
      amount: 450,
    },
    {
      id: 4,
      name: 'Nina Patel',
      caseType: 'Probate & Estates',
      status: 'Active',
      nextHearing: 'Dec 2, 2025',
      image: 'assets/client4.jpeg',
      amount: 600,
    },
  ];

  constructor(private router: Router) {} // ✅ inject Router

  ngOnInit() {}

  /** ✅ Filter Clients based on search and selected filter */
  getFilteredClients() {
    return this.clients.filter((client) => {
      const matchesSearch =
        client.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        client.caseType.toLowerCase().includes(this.searchQuery.toLowerCase());

      const matchesFilter =
        this.selectedFilter === 'ALL' ||
        client.status.toUpperCase() === this.selectedFilter;

      return matchesSearch && matchesFilter;
    });
  }

  /** ✅ Dashboard Stats */
  get totalClients(): number {
    return this.clients.length;
  }

  get activeClients(): number {
    return this.clients.filter((c) => c.status === 'Active').length;
  }

  get closedClients(): number {
    return this.clients.filter((c) => c.status === 'Closed').length;
  }

  get pendingClients(): number {
    return this.clients.filter((c) => c.status === 'Pending').length;
  }

  /** ✅ Working viewClient() navigation */
  viewClient(client: any) {
    const clientRoutes: any = {
      1: '/client1',
      2: '/client2',
      3: '/client3',
      4: '/client4',
    };

    const route = clientRoutes[client.id];

    if (route) {
      this.router.navigate([route]);
    } else {
      console.warn('No route found for this client:', client);
    }
  }
}
