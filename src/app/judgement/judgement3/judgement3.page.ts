import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeaderrComponent } from 'src/app/headerr/headerr.component';
import { FooterrComponent } from 'src/app/footerr/footerr.component';

@Component({
  selector: 'app-judgement3',
  templateUrl: './judgement3.page.html',
  styleUrls: ['./judgement3.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule,HeaderrComponent,FooterrComponent]
})
export class Judgement3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
