import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-footerr',
  templateUrl: './footerr.component.html',
  styleUrls: ['./footerr.component.scss'],
  imports:[IonicModule,RouterLink],
    standalone: true,
})
export class FooterrComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
