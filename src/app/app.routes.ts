import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  {
    path: 'student',
    loadComponent: () =>
      import('./pages/student/student.component')
        .then(c => c.StudentComponent)
  }
];
