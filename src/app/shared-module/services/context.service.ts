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

    /**
     * Get current context
     */
    getContext(): IContext {
        return this.currentContext;
    }

    /**
     * Set current context
     * param value
     */
    setContext(value: IContext): void {
        this.currentContext = value;
        this.context$.next(value);
    }

    /**
     * Fire observable on context
     */
    onContextChange() {
        return this.context$.asObservable();
    }
}
