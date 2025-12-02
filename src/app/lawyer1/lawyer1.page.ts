import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lawyer1',
  templateUrl: './lawyer1.page.html',
  styleUrls: ['./lawyer1.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, FooterComponent, RouterLink],
})
export class Lawyer1Page implements OnInit {
  lawyer = {
    name: 'Adv. Mariya Shah',
    specialization: 'Family Lawyer',
    rating: 4.7,
    reviews: 132,
    image: 'assets/lawyer1.jpeg',
    bio: 'Adv. Mariya Shah is an experienced advocate specializing in Corporate and Criminal Law, with a proven record of delivering strategic legal solutions and courtroom excellence. With over 12 years of practice, she has successfully represented diverse clients, from emerging businesses to high-profile cases. Her approach combines legal precision, integrity, and client-centered advocacy.',
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
