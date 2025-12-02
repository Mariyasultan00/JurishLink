import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderrComponent } from 'src/app/headerr/headerr.component';
import { FooterrComponent } from 'src/app/footerr/footerr.component';

@Component({
  selector: 'app-document2',
  templateUrl: './document2.page.html',
  styleUrls: ['./document2.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule,IonicModule,HeaderrComponent,FooterrComponent]
})
export class Document2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
