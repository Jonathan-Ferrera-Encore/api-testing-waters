import { Injectable } from '@angular/core';
import { Storage } from '../interfaces/storage';
import { Console } from './console';

@Injectable({
    providedIn: 'root'
})
export class LocalStorage implements Storage {
    constructor() { }

    clear() { window.localStorage.clear(); }

    getItem(key:string) { return window.localStorage.getItem(key); }

    getLength() { return window.localStorage.length; }

    removeItem(key:string) {
        try {
            window.localStorage.removeItem(key);
            return true;
        }
        catch (e) {
            return false;
        }
    }

    setItem(key:string, value:string) {
        try {
            window.localStorage.setItem(key, value);
            return true;
        }
        catch (e) {
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
                Console.error(e.name + ': ' + e.message)
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
                Console.error(e.name + ': ' + e.message)
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
                Console.error(e.name + ': ' + e.message)
            }
        }

        return NaN;
    }
}
