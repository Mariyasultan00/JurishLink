import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterrComponent } from "../footerr/footerr.component";

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule,FooterrComponent,RouterLink]
})
export class Tab6Page implements OnInit {

  constructor() { }
  ngOnInit() {
  }
     
     
}
