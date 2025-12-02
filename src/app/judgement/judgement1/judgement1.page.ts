import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderrComponent } from 'src/app/headerr/headerr.component';
import { FooterrComponent } from 'src/app/footerr/footerr.component';

@Component({
  selector: 'app-judgement1',
  templateUrl: './judgement1.page.html',
  styleUrls: ['./judgement1.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule,HeaderrComponent,FooterrComponent]
})
export class Judgement1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
