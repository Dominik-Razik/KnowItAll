import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'general-trivia',
    loadComponent: () => import('./general-trivia/general-trivia.page').then(m => m.GeneralTriviaPage)
  },
];