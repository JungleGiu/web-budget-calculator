import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '' ,pathMatch:'full', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
    { path: 'history', loadComponent: () => import('./pages/history/history').then(m => m.History) }
];
