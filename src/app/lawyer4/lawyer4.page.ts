import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lawyer4',
  templateUrl: './lawyer4.page.html',
  styleUrls: ['./lawyer4.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule,FooterComponent,RouterLink]
})
export class Lawyer4Page implements OnInit {
  lawyer = {
    name: 'Victor Johns',
    specialization: 'Family Lawyer',
    rating: 4.7,
    reviews: 132,
    image: 'assets/lawyer3.jpeg',
    bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Praesent vehicula mauris ut augue consectetur, nec varius sapien viverra. 
          Curabitur sit amet turpis euismod, gravida nulla vitae, lacinia nisl.`,
  };

  dates = [
    { day: 'Mon', date: 15, selected: false },
    { day: 'Tue', date: 16, selected: false },
    { day: 'Wed', date: 17, selected: false },
    { day: 'Thu', date: 18, selected: true },
    { day: 'Fri', date: 19, selected: false },
  ];

  timeSlots = ['10.00 AM', '11.00 AM', '01.00 PM'];
  selectedTime = '11.00 AM';

  constructor() {}

  ngOnInit() {}

  selectDate(date: any) {
    this.dates.forEach((d) => (d.selected = false));
    date.selected = true;
  }

  selectTime(time: string) {
    this.selectedTime = time;
  }

  sendEmail() {
    window.location.href = 'mailto:mariyasultan460@gmail.com';
  }

}
