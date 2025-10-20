import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '' ,pathMatch:'full', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
    { path: 'sharedbudget', loadComponent: () => import('./pages/sharedbudget/sharedbudget').then(m => m.Sharedbudget) }
];
