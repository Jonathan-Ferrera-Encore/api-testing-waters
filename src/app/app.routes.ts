import { Routes } from '@angular/router';

import { loginGuard } from './_shared/guards/login.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./dummyjson/login/login.component').then(c => c.LoginComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dummyjson/dashboard/dashboard.component').then(c => c.DashboardComponent),
        canActivate: [loginGuard]
    }
];
