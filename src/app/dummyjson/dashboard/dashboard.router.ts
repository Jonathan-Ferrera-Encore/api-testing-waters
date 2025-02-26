import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: 'carts',
        loadComponent: () => import('./carts/carts.component').then(c => c.CartsComponent)
    },
    {
        path: 'comments',
        loadComponent: () => import('./comments/comments.component').then(c => c.CommentsComponent)
    },
    {
        path: '',
        loadComponent: () => import('./dashboard.component').then(c => c.DashboardComponent)
    },
];