import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
    constructor() { }

    public static alert(message:string): void {
        window.alert(message);
    }

    public static confirm(message:string): boolean {
        return window.confirm(message);
    }

    public static prompt(message:string, defaultValue?:string): string|null {
        if (defaultValue) {
            return window.prompt(message, defaultValue);
        }
        else {
            return window.prompt(message);
        }
    }
}
