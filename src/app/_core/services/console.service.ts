import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {
  constructor() { }

    public static assert(assertion:boolean, message:string) {
        if (message) {
            window.console.assert(assertion, message);
        }
        else {
            window.console.assert(assertion);
        }
    }

    public static debug(message:string, ...substitutions:string[]) {
        if (substitutions) {
            window.console.debug(message, substitutions);
        }
        else {
            window.console.debug(message);
        }
    }

    public static error(message:string, ...substitutions:string[]) {
        if (substitutions) {
            window.console.error(message, substitutions);
        }
        else {
            window.console.error(message);
        }
    }

    public static info(message:string, ...substitutions:string[]) {
        if (substitutions) {
            window.console.info(message, substitutions);
        }
        else {
            window.console.info(message);
        }
    }

    public static log(message:string, ...substitutions:string[]) {
        if (substitutions) {
            window.console.log(message, substitutions);
        }
        else {
            window.console.log(message);
        }
    }

    public static warn(message:string, ...substitutions:string[]) {
        if (substitutions) {
            window.console.warn(message, substitutions);
        }
        else {
            window.console.warn(message);
        }
    }
}