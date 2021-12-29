import { Action } from '@ngrx/store';
import { Operation } from './operation.model';

export const ADD_OPERATION = '[Collection] ADD_OPERATION';

export class AddAction implements Action {
     type = ADD_OPERATION;
  
    constructor(public payload: Operation) {}
  }

  export type Actions = AddAction;