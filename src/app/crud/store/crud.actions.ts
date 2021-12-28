
import { createAction, props } from '@ngrx/store';

// export const increment = createAction('[Counter Component] Increment');
// export const decrement = createAction('[Counter Component] Decrement');
// export const reset = createAction('[Counter Component] Reset');

export interface Action {
    type: string;
    payload?: any;
   }

   export const ADD_Data = 'Add an operation';

// export const adADD_DatadData = createAction(
//     '[crud Component] addData',
//     props<{type: string}>()

// );