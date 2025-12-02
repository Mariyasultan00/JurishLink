import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage {
  notifications = [
    {
      title: 'Case Update',
      message: 'Hearing date for Case #A102 has been rescheduled to Oct 20.',
      time: '2 hours ago',
      icon: 'briefcase-outline',
      unread: true,
    },
    {
      title: 'New Message',
      message: 'You have a new message from Advocate Sharma.',
      time: '5 hours ago',
      icon: 'chatbubble-ellipses-outline',
      unread: false,
    },
    {
      title: 'Reminder',
      message: 'Consultation with Client Mehta tomorrow at 10 AM.',
      time: '1 day ago',
      icon: 'calendar-outline',
      unread: false,
    },
  ];
}
