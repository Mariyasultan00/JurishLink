import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { FooterComponent } from "src/app/footer/footer.component";
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule,FooterComponent,HeaderComponent,RouterLink]
})
export class Tab4Page implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
