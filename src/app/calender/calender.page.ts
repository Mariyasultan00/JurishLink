import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';
import { FooterrComponent } from '../footerr/footerr.component';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, HeaderComponent,FooterrComponent],
})
export class CalenderPage implements OnInit {

  selectedDate: string = new Date().toISOString();

  dailyCases = [
    {
      title: "9's case",
      time: '4:58 AM',
      next: '4:59 AM',
      status: 'Final Arguments',
      description: 'Some discussion happened',
    },
    {
      title: 'Rajesh vs Sob',
      time: '4:57 AM',
      next: '4:58 AM',
      status: 'Cross-examination',
      description: 'Cross examine happened',
    },
  ];

  constructor() {}

  ngOnInit() {}

}
