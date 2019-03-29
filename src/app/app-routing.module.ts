import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from './list/book.component';
import { CreateComponent } from './list/create/create.component';
import { ReadListComponent } from './read-list/read-list.component';

const routes: Routes = [
  {path: '', component: BookComponent},
  {path: 'list', component: BookComponent},
  {path: 'create', component: CreateComponent},
  {path: 'read-list', component: ReadListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

