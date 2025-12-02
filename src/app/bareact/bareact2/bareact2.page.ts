import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterrComponent } from 'src/app/footerr/footerr.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bareact2',
  templateUrl: './bareact2.page.html',
  styleUrls: ['./bareact2.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule,FooterrComponent,RouterLink]
})
export class Bareact2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
