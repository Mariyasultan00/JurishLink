import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    IonApp,    
    IonRouterOutlet,
    RouterModule
  ],
})
export class AppComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {
    const userType = localStorage.getItem('userType');
    if (userType === 'client') {
      this.router.navigate(['/tab1']);
    } else if (userType === 'lawyer') {
      this.router.navigate(['/tab6']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
