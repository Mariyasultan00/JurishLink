import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from "src/app/footer/footer.component";
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    HeaderComponent,
    FooterComponent,
    CommonModule,
    FormsModule
  ]
})
export class Tab2Page implements OnInit {

  searchQuery: string = '';
  selectedCategory: string = 'all';  // ✅ Default to "all"

  lawyers = [
    { id: 1, name: 'Adv. Mariya Shah', specialty: 'Crime Lawyer', rating: 4.7, reviews: 132, price: 50, img: 'assets/lawyer1.jpeg', category: 'criminal' },
    { id: 2, name: 'John Nunez', specialty: 'Family Lawyer', rating: 4.7, reviews: 132, price: 50, img: 'assets/lawyer2.jpeg', category: 'family' },
    { id: 3, name: 'Victor Johns', specialty: 'Corporate Lawyer', rating: 4.7, reviews: 132, price: 50, img: 'assets/lawyer3.jpeg', category: 'corporate' },
    { id: 4, name: 'Catalina Homes', specialty: 'Family Lawyer', rating: 4.8, reviews: 120, price: 50, img: 'assets/lawyer4.jpeg', category: 'family' },
    { id: 5, name: 'James Poppins', specialty: 'Corporate Lawyer', rating: 4.6, reviews: 98, price: 50, img: 'assets/lawyer5.jpeg', category: 'corporate' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  // ✅ Filtered lawyers list (with "all" option)
  get filteredLawyers() {
    return this.lawyers.filter(lawyer => {
      const matchesCategory = this.selectedCategory === 'all' || lawyer.category === this.selectedCategory;
      const matchesSearch = lawyer.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  // ✅ Handle filter button clicks
  goToCategory(category: string) {
    this.selectedCategory = category;
  }

  // ✅ Navigate to lawyer details page
  viewLawyer(lawyer: any) {
  const lawyerRoutes: any = {
    1: '/lawyer1',
    2: '/lawyer2',
    3: '/lawyer3',
    4: '/lawyer4',
    5: '/lawyer5',
    6: '/lawyer6'
  };

  const route = lawyerRoutes[lawyer.id];
  if (route) {
    this.router.navigate([route]);
  } else {
    console.error('No route found for lawyer ID:', lawyer.id);
  }
}

}
