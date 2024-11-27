import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';

import { ConsoleService } from '../../_core/services/console.service';
import { SessionStorageService } from '../../_core/services/session-storage.service';

import { DummyJSONApiService } from '../../_shared/services/dummyjsonapi.service';
import { LoginRequest, LoginResponse, Refresh } from '../../_shared/interfaces/auth';

@Component({
    selector: 'waters-login',
    imports: [FormsModule, JsonPipe, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTooltipModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
    hide = signal(true);
    loginForm!: FormGroup;

    constructor(private dummyJSONApiService: DummyJSONApiService, private sessionStorageService: SessionStorageService) {}

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
            password: new FormControl('', { nonNullable: true, validators: [Validators.required] })
        });
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

            this.dummyJSONApiService.login(loginRequest).subscribe({
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
        let refresh: Refresh = {
            accessToken: data.accessToken,
            refreshToken: data.refreshToken
        }

        this.sessionStorageService.setItem('refresh', JSON.stringify(refresh));
    }
}
