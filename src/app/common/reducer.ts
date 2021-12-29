import { ActionReducer,Action, State } from "@ngrx/store";
import { Operation } from "./operation.model";
import { AddAction } from "./action";

export const ADD_OPERATION = 'Add an operation';
export const REMOVE_OPERATION = 'Remove an operation';

const initialState: any= []

export const operationsReducer: ActionReducer<any> = (state = initialState, action: AddAction) => {
    switch (action.type) {

      case ADD_OPERATION: 
        const operation:Operation = action.payload;
        return [ ...state, operation ];

        case REMOVE_OPERATION:
            return state.filter(operation => {
              //filter items to exclude the item in the payload
              return operation.id !== action.payload.id;
            });
    
    default:
        return state;
    }
};