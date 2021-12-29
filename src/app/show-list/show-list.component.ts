import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../app.state';
import { Operation } from '../common/operation.model';
import { REMOVE_OPERATION } from '../common/reducer';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit, OnDestroy {
  operations:Array<Operation>;
  subscription:Subscription;
  

  constructor(private store: Store<AppState>) { 
    this.subscription =  store.select('operations').subscribe(state => this.operations= state)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
  }
  deleteOperation(operation) {
    this.store.dispatch({type: REMOVE_OPERATION, payload: operation})
  }
 

}
