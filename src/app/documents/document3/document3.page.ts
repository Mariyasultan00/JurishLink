import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FooterrComponent } from 'src/app/footerr/footerr.component';
import { HeaderrComponent } from 'src/app/headerr/headerr.component';

@Component({
  selector: 'app-document3',
  templateUrl: './document3.page.html',
  styleUrls: ['./document3.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule,FooterrComponent,HeaderrComponent]
})
export class Document3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
