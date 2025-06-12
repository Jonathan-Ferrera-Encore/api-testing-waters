import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

import { Auth } from '../../_core/services/auth';

export const loginChildGuard: CanActivateChildFn = (childRoute, state) => {
    const router: Router = inject(Router);
    const auth: Auth = inject(Auth);

    if (auth.isLoggedIn()) {
        return true;
    }

    router.navigateByUrl('/');
    return false;
};
