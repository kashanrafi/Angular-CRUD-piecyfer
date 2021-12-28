
import { createReducer, ActionReducer, State, } from '@ngrx/store';
import {  ADD_Data, Action } from './crud.actions'; 

export const initialState = [];

// const _counterReducer = createReducer(
//   initialState,
//   on(increment, (state) => state + 1),
//   on(decrement, (state) => state - 1),
//   on(reset, (state) => 0),
//   on(addData, (state, { name }) => ({ ...state, name }))
// );

export const counterReducer: ActionReducer<any> = (state = initialState, action: Action) => {
  switch (action.type){

    case ADD_Data: //Action type
    const data: string = action.payload;//the contents of an operation
    return [ ...state, data ];
  }
  return state;
}