import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports:[IonicModule,RouterLink],
  standalone: true,
})
export class FooterComponent  implements OnInit {
  constructor() {
   
   }

  ngOnInit() {}

}
