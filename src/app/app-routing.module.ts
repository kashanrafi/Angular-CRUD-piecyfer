import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowListComponent } from './show-list/show-list.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  { path: 'show-list', component: ShowListComponent },
  { path: 'add-item', component: CrudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
