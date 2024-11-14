import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ConsoleService } from '../_core/services/console.service';

import { DummyJSONApiService } from '../_shared/services/dummyjsonapi.service';
import { DummyJSONUserApi } from '../_shared/interfaces/dummyjson';

@Component({
  selector: 'app-dummyjson',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './dummyjson.component.html',
  styleUrl: './dummyjson.component.scss'
})
export class DummyJSONComponent {
    dummyJSONLoginControl = new FormControl();

    constructor(private dummyJSONApiService: DummyJSONApiService) {}

    public getUsers() {
        this.dummyJSONApiService.getUsers()
            .subscribe({
                next: (data) => ConsoleService.log('getUsers() next'),
                error: (error) => ConsoleService.error(error),
                complete: () => ConsoleService.info('getUsers() complete')
            });
    }
}
