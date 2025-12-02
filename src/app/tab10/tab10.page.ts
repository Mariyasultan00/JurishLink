import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FooterrComponent } from '../footerr/footerr.component';
import { HeaderrComponent } from '../headerr/headerr.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab10',
  templateUrl: './tab10.page.html',
  styleUrls: ['./tab10.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule,FooterrComponent,HeaderrComponent,RouterLink]
})
export class Tab10Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
