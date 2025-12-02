import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-judgement',
  templateUrl: './judgement.page.html',
  styleUrls: ['./judgement.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class JudgementPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
