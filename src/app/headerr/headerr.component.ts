import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-headerr',
  templateUrl: './headerr.component.html',
  styleUrls: ['./headerr.component.scss'],
  imports:[IonicModule,RouterLink]
})
export class HeaderrComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
