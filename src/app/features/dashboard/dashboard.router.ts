import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: 'carts',
        loadComponent: () => import('../carts/carts').then(c => c.Carts)
    },
    {
        path: 'comments',
        loadComponent: () => import('../comments/comments').then(c => c.Comments)
    },
    {
        path: '',
        loadComponent: () => import('./dashboard').then(c => c.Dashboard)
    },
];