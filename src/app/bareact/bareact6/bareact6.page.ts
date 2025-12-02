import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterrComponent } from 'src/app/footerr/footerr.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bareact6',
  templateUrl: './bareact6.page.html',
  styleUrls: ['./bareact6.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule,FooterrComponent,RouterLink]
})
export class Bareact6Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
