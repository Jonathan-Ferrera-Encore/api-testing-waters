import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';

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
        }
    }

    clearFields() {
        console.info('clearFields() activated.');
    }
}
