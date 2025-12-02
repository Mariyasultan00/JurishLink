import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterrComponent } from 'src/app/footerr/footerr.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bareact5',
  templateUrl: './bareact5.page.html',
  styleUrls: ['./bareact5.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule,IonicModule,FooterrComponent,RouterLink]
})
export class Bareact5Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
