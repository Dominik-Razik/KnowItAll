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
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'vehicle-trivia',
    loadComponent: () => import('./vehicle-trivia/vehicle-trivia.page').then( m => m.VehicleTriviaPage)
  },
  {
    path: 'gaming-trivia',
    loadComponent: () => import('./gaming-trivia/gaming-trivia.page').then( m => m.GamingTriviaPage)
  },
];