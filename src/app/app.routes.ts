import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
      {
        path: 'tab1',
        loadComponent: () => import('./tab1/tab1.page').then(m => m.Tab1Page)
      },
      {
        path: 'tab2',
        loadComponent: () => import('./tab2/tab2.page').then(m => m.Tab2Page)
      },
      {
        path: 'tab3',
        loadComponent: () => import('./tab3/tab3.page').then(m => m.Tab3Page)
      },
      {
        path: 'tab4',
        loadComponent: () => import('./tab4/tab4.page').then(m => m.Tab4Page)
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then( m => m.SignupPage)
  },
  
  
  {
    path: 'payment',
    loadComponent: () => import('./payment/payment.page').then( m => m.PaymentPage)
  },
  {
    path: 'lawyer1',
    loadComponent: () => import('./lawyer1/lawyer1.page').then( m => m.Lawyer1Page)
  },
  {
    path: 'lawyer2',
    loadComponent: () => import('./lawyer2/lawyer2.page').then( m => m.Lawyer2Page)
  },
  {
    path: 'lawyer3',
    loadComponent: () => import('./lawyer3/lawyer3.page').then( m => m.Lawyer3Page)
  },
  {
    path: 'profile1',
    loadComponent: () => import('./profile1/profile1.page').then( m => m.Profile1Page)
  },
  {
    path: 'profile2',
    loadComponent: () => import('./profile2/profile2.page').then( m => m.Profile2Page)
  },
  {
    path: 'profile3',
    loadComponent: () => import('./profile3/profile3.page').then( m => m.Profile3Page)
  },
  {
    path: 'casefiling',
    loadComponent: () => import('./casefiling/casefiling.page').then( m => m.CasefilingPage)
  },
  {
    path: 'propertyagrement',
    loadComponent: () => import('./propertyagrement/propertyagrement.page').then( m => m.PropertyagrementPage)
  },
  {
    path: 'tab5',
    loadComponent: () => import('./tab5/tab5.page').then( m => m.Tab5Page)
  },
  
  
  {
    path: 'lawyer4',
    loadComponent: () => import('./lawyer4/lawyer4.page').then( m => m.Lawyer4Page)
  },
  {
    path: 'lawyer5',
    loadComponent: () => import('./lawyer5/lawyer5.page').then( m => m.Lawyer5Page)
  },
  {
    path: 'lawyer6',
    loadComponent: () => import('./lawyer6/lawyer6.page').then( m => m.Lawyer6Page)
  },
  
  {
    path: 'chats',
    loadComponent: () => import('./chats/chats.page').then( m => m.ChatsPage)
  },
  {
    path: 'notifications',
    loadComponent: () => import('./notifications/notifications.page').then( m => m.NotificationsPage)
  },
  {
    path: 'tab6',
    loadComponent: () => import('./tab6/tab6.page').then( m => m.Tab6Page)
  },
  {
    path: 'tab7',
    loadComponent: () => import('./tab7/tab7.page').then( m => m.Tab7Page)
  },
  {
    path: 'tab8',
    loadComponent: () => import('./tab8/tab8.page').then( m => m.Tab8Page)
  },
  {
    path: 'tab9',
    loadComponent: () => import('./tab9/tab9.page').then( m => m.Tab9Page)
  },
  {
    path: 'tab10',
    loadComponent: () => import('./tab10/tab10.page').then( m => m.Tab10Page)
  },
  {
    path: 'calender',
    loadComponent: () => import('./calender/calender.page').then( m => m.CalenderPage)
  },
  {
    path: 'documents',
    loadComponent: () => import('./documents/documents.page').then( m => m.DocumentsPage)
  },
  
 
  {
    path: 'judgement',
    loadComponent: () => import('./judgement/judgement.page').then( m => m.JudgementPage)
  },
  {
    path: 'courtlist',
    loadComponent: () => import('./courtList/courtlist.page').then( m => m.CourtListPage)
  },
  {
    path: 'bareact',
    loadComponent: () => import('./bareact/bareact.page').then( m => m.BareactPage)
  },
  
  {
    path: 'bareact1',
    loadComponent: () => import('./bareact/bareact1/bareact1.page').then( m => m.Bareact1Page)
  },
  {
    path: 'bareact2',
    loadComponent: () => import('./bareact/bareact2/bareact2.page').then( m => m.Bareact2Page)
  },
  {
    path: 'bareact3',
    loadComponent: () => import('./bareact/bareact3/bareact3.page').then( m => m.Bareact3Page)
  },
  {
    path: 'bareact4',
    loadComponent: () => import('./bareact/bareact4/bareact4.page').then( m => m.Bareact4Page)
  },
  {
    path: 'bareact5',
    loadComponent: () => import('./bareact/bareact5/bareact5.page').then( m => m.Bareact5Page)
  },
  {
    path: 'bareact6',
    loadComponent: () => import('./bareact/bareact6/bareact6.page').then( m => m.Bareact6Page)
  },
  {
    path: 'bareact7',
    loadComponent: () => import('./bareact/bareact7/bareact7.page').then( m => m.Bareact7Page)
  },
  {
    path: 'bareact8',
    loadComponent: () => import('./bareact/bareact8/bareact8.page').then( m => m.Bareact8Page)
  },
  {
    path: 'clients',
    loadComponent: () => import('./clients/clients.page').then( m => m.ClientsPage)
  },
  {
    path: 'client1',
    loadComponent: () => import('./clients/client1/client1.page').then( m => m.Client1Page)
  },
  {
    path: 'client2',
    loadComponent: () => import('./clients/client2/client2.page').then( m => m.Client2Page)
  },
  {
    path: 'client3',
    loadComponent: () => import('./clients/client3/client3.page').then( m => m.Client3Page)
  },
  {
    path: 'client4',
    loadComponent: () => import('./clients/client4/client4.page').then( m => m.Client4Page)
  },
  {
    path: 'judgement1',
    loadComponent: () => import('./judgement/judgement1/judgement1.page').then( m => m.Judgement1Page)
  },
  {
    path: 'judgement2',
    loadComponent: () => import('./judgement/judgement2/judgement2.page').then( m => m.Judgement2Page)
  },
  {
    path: 'judgement3',
    loadComponent: () => import('./judgement/judgement3/judgement3.page').then( m => m.Judgement3Page)
  },
  {
    path: 'judgement4',
    loadComponent: () => import('./judgement/judgement4/judgement4.page').then( m => m.Judgement4Page)
  },
  
  {
    path: 'document1',
    loadComponent: () => import('./documents/document1/document1.page').then( m => m.Document1Page)
  },
  {
    path: 'document2',
    loadComponent: () => import('./documents/document2/document2.page').then( m => m.Document2Page)
  },
  {
    path: 'document3',
    loadComponent: () => import('./documents/document3/document3.page').then( m => m.Document3Page)
  },
  {
    path: 'notification',
    loadComponent: () => import('./notification/notification.page').then( m => m.NotificationPage)
  }
  
];
