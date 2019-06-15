import { Injectable } from '@angular/core';
import { IContext } from '../common.model';

@Injectable()
export class ContextService {
    private currentContext: IContext;
    constructor() { }

    getContext(): IContext {
        return this.currentContext;
    }

    setContext(value: IContext): void {
        this.currentContext = value;
    }
}
