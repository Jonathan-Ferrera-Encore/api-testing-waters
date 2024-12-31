import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ConsoleService } from '../../_core/services/console.service';
import { SessionStorageService } from '../../_core/services/session-storage.service';

import { AuthService } from '../../_shared/services/auth.service';
import { LoginRequest, LoginResponse, RefreshResponse } from '../../_shared/interfaces/auth';

@Component({
    selector: 'waters-login',
    imports: [FormsModule, JsonPipe, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTooltipModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
    private authService: AuthService = inject(AuthService);
    private sessionStorageService: SessionStorageService = inject(SessionStorageService);
    private router: Router = inject(Router);
    
    hide = signal(true);
    loginForm!: FormGroup;

    protected loginSubscription$: Subscription = Subscription.EMPTY;

    constructor() {}

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
            password: new FormControl('', { nonNullable: true, validators: [Validators.required] })
        });
    }

    ngOnDestroy(): void {
        this.loginSubscription$.unsubscribe();
    }

    togglePasswordVisibility(event: MouseEvent) {
        this.hide.set(!this.hide());
        event.stopPropagation();
    }

    loginUser() {
        console.info('loginUser() activated.');

        if (this.loginForm.valid) {
            console.info('loginForm is valid.');

            let loginRequest: LoginRequest = {
                username: this.loginForm.value.username,
                password: this.loginForm.value.password,
                expiresInMins: 30
            };

            this.loginSubscription$ = this.authService.login(loginRequest).subscribe({
                next: (data: LoginResponse) => this.postLoginNext(data),
                error: (error) => ConsoleService.error(error),
                complete: () => ConsoleService.info('login() complete')
            });
        }
    }

    clearFields() {
        console.info('clearFields() activated.');
    }

    private postLoginNext(data: LoginResponse) {
        let refresh: RefreshResponse = {
            accessToken: data.accessToken,
            refreshToken: data.refreshToken
        }

        this.sessionStorageService.setItem('refresh', JSON.stringify(refresh));

        this.router.navigate(['/dashboard']);
    }
}
