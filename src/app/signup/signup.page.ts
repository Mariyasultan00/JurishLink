import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule,RouterLink,HeaderComponent,FormsModule]
})
export class SignupPage implements OnInit {
  isPopoverOpen = false;
  termsAccepted = false;

  openPopover(event: Event) {
    event.preventDefault();
    this.isPopoverOpen = true;
  }
  acceptTerms() {
    this.termsAccepted = true;  
    this.isPopoverOpen = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
