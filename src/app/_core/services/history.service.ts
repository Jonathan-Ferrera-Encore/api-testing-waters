import { Injectable, isDevMode } from '@angular/core';
import { ConsoleService } from './console.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
    constructor() {
        if (isDevMode()) {
            window.addEventListener('popstate', (e) => {
                ConsoleService.info('location: ' + document.location + ', state: ' + JSON.stringify(e.state));
            });
        }
    }

    back():void { history.back(); }

    forward():void { history.forward(); }

    go(delta:number = 0) { history.go(delta); }

    pushState(state:object, url?:string) {
        let unused:string = '';
        if (url) {
            history.pushState(state, unused, url);
        }
        else {
            history.pushState(state, unused);
        }
    }

    replaceState(state:object, url?:string) {
        let unused:string = '';
        if (url) {
            history.replaceState(state, unused, url);
        }
        else {
            history.replaceState(state, unused);
        }
    }
}
