import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router'; // ✅ Import Router

import { FooterrComponent } from '../footerr/footerr.component';
import { HeaderrComponent } from '../headerr/headerr.component';

@Component({
  selector: 'app-tab8',
  templateUrl: './tab8.page.html',
  styleUrls: ['./tab8.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, FooterrComponent, HeaderrComponent,RouterLink],
})
export class Tab8Page implements OnInit {
  

  constructor(private router: Router) {} 

  ngOnInit() {}

 
  
  
}
