import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ADD_Data } from './store/crud.actions';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  items: string[] = []; 
  username: string = '';
  email : string = '';
  count$: Observable<string>;
  
  constructor(private store: Store<{ count: string }>) {
    this.count$ = store.select('count');
   }

  ngOnInit(): void {
  }
  addItems() {
    if (this.username == '' && this.email == '') {
    }
    else {
      console.log(this.username);
      console.log(this.email);
      // this.items.push(this.username && this.email);
      this.store.dispatch({type: ADD_Data, payload: {username: this.username}} );
    
      this.username = '';
      
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
