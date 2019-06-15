import { Injectable } from '@angular/core';
import { IContext } from '../shared.model';
import { Subject } from 'rxjs';

@Injectable({
    'providedIn': 'root'
})
export class ContextService {
    private currentContext: IContext;
    private context$ = new Subject<IContext>();
    constructor() { }

    getContext(): IContext {
        return this.currentContext;
    }

    setContext(value: IContext): void {
        this.currentContext = value;
        this.context$.next(value);
    }

    onContextChange() {
        return this.context$.asObservable();
    }
}
