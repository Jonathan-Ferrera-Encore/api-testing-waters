import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Console } from '../../_core/services/console';
import { SessionStorage } from '../../_core/services/session-storage';

import { Auth } from '../../_core/services/auth';
import { LoginRequest, LoginResponse, RefreshResponse } from '../../_core/interfaces/auth';

@Component({
    selector: 'waters-login',
    imports: [JsonPipe, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTooltipModule],
    templateUrl: './login.html',
    styleUrl: './login.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Login implements OnInit, OnDestroy {
    private auth: Auth = inject(Auth);
    private sessionStorage: SessionStorage = inject(SessionStorage);
    private router: Router = inject(Router);
    
    hide = signal(true);
    loginForm!: FormGroup;

    protected loginSubscription$: Subscription = Subscription.EMPTY;

    constructor() {}

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            username: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
            password: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] })
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

            this.loginSubscription$ = this.auth.login(loginRequest).subscribe({
                next: (data: LoginResponse) => this.postLoginNext(data),
                error: (error) => Console.error(error),
                complete: () => Console.info('login() complete')
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

        this.sessionStorage.setItem('refresh', JSON.stringify(refresh));

        this.router.navigate(['/dashboard']);
    }
}
