import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Operation } from '../common/operation.model';
import { ADD_OPERATION } from '../common/reducer';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit{

  id:number = 0 ;
  operation:Operation =  new Operation();   

  constructor(private store: Store<AppState>) {
   }
  ngOnInit(): void {
  }
  addItems() {
    if (this.operation.username == '' && this.operation.email == '') {
    }
    else {
      this.store.dispatch({type: ADD_OPERATION, payload: {
        id: ++ this.id,
        username: this.operation.username,
        email: this.operation.email
      }});
      this.operation.username = '';
      this.operation.email = '';
    }
  }
  // increment() {
  //   this.store.dispatch(increment());
  // }

  // decrement() {
  //   this.store.dispatch(decrement());
  // }

  // reset() {
  //   this.store.dispatch(reset());
  // }

}
