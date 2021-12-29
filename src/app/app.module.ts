import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { StoreModule } from '@ngrx/store';
import { operationsReducer } from './common/reducer';
import { ShowListComponent } from './show-list/show-list.component';
// import { counterReducer } from './crud/store/crud.reducer';
@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    ShowListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    StoreModule.forRoot({ operations: operationsReducer }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
