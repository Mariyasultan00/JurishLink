import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-casefiling',
  templateUrl: './casefiling.page.html',
  styleUrls: ['./casefiling.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule,IonicModule,FooterComponent,RouterLink]
})
export class CasefilingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
