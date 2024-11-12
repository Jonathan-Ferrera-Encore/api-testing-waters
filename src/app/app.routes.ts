import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'jsonplaceholder',
        loadComponent: () => import('./jsonplaceholder/jsonplaceholder.component').then(c => c.JsonplaceholderComponent)
    }
];
