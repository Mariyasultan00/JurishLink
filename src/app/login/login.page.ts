import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavController } from '@ionic/angular'; 
import { Router,RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class LoginPage implements OnInit {
   username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
  }
  login() {
    // Simple example logic (replace with backend auth later)
    if (this.username.endsWith('@client.com') && this.password === 'client123') {
      localStorage.setItem('userType', 'client');
      localStorage.setItem('userName', this.username);
      this.router.navigate(['/tab1']);
    } 
    else if (this.username.endsWith('@lawyer.com') && this.password === 'lawyer123') {
      localStorage.setItem('userType', 'lawyer');
      localStorage.setItem('userName', this.username);
      this.router.navigate(['/tab6']);
    } 
    else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
