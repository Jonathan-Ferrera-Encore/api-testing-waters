import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { IStorage } from '../interfaces/storage';
import { ConsoleService } from './console.service';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService implements IStorage {
    private window: Window|null;
    constructor(@Inject(DOCUMENT) private document: Document) {
        this.window = this.document.defaultView;
    }

    clear() { window.sessionStorage.clear(); }

    getItem(key:string) { return this.window!.sessionStorage.getItem(key); }

    getLength() { return window.sessionStorage.length; }

    removeItem(key:string) {
        try {
            window.sessionStorage.removeItem(key);
            return true;
        }
        catch (e) {
            return false;
        }
    }

    setItem(key:string, value:string) {
        try {
            window.sessionStorage.setItem(key, value);
            return true;
        }
        catch (e:unknown) {
            if (e instanceof DOMException) {
                ConsoleService.error(e.name + ': ' + e.message)
            }
            return false;
        }
    }

    getBoolean(key:string) {
        let value:string|null = this.getItem(key);
        try {
            return Boolean(value);
        }
        catch (e:unknown) {
            if (e instanceof Error) {
                ConsoleService.error(e.name + ': ' + e.message);
            }
        }

        return null;
    }

    getJson(key:string) {
        let value:string|null = this.getItem(key);
        try {
            let parsed:any = JSON.parse(value!);
            if (parsed && typeof parsed === 'object') {
                return value!;
            }
        }
        catch (e:unknown) {
            if (e instanceof Error) {
                ConsoleService.error(e.name + ': ' + e.message)
            }
        }

        return '{}';
    }

    getNumber(key:string) {
        let value:string|null = this.getItem(key);
        try {
            return Number(value);
        }
        catch (e:unknown) {
            if (e instanceof Error) {
                ConsoleService.error(e.name + ': ' + e.message)
            }
        }

        return NaN;
    }
}