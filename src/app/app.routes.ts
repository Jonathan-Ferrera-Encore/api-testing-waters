import { Routes } from '@angular/router';

import { loginGuard } from './_shared/guards/login.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./dummyjson/login/login.component').then(c => c.LoginComponent)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dummyjson/dashboard/dashboard.router').then(r => r.DASHBOARD_ROUTES),
        canActivate: [loginGuard]
    }
];
