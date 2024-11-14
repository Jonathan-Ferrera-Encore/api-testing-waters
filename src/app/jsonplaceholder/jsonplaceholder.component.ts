import { Component } from '@angular/core';

import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-jsonplaceholder',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './jsonplaceholder.component.html',
  styleUrl: './jsonplaceholder.component.scss'
})
export class JSONPlaceholderComponent {

}
