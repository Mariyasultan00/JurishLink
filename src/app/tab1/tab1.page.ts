
import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from "src/app/footer/footer.component";

import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [IonicModule,FooterComponent,RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})

export class Tab1Page implements OnInit{
  openLink(url: string) {
  console.log('Opening link:', url);
  window.open(url, '_blank');
}

  constructor() { }

  ngOnInit() { }


}
