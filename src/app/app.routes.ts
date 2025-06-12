import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/login/login').then(c => c.Login)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.router').then(r => r.DASHBOARD_ROUTES),
        // canActivate: [loginGuard]
    }
];
