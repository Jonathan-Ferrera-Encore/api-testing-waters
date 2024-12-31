import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../services/auth.service'

export const loginGuard: CanActivateFn = (route, state) => {
    const router: Router = inject(Router);
    const authService: AuthService = inject(AuthService);

    if (authService.isLoggedIn()) {
        return true;
    }

    router.navigate(['']);
    return false;
};
