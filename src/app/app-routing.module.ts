// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeUserFormComponent } from './type-user-form/type-user-form.component';
import { TypeUserListComponent } from './type-user-list/type-user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'type-user-form', component: TypeUserFormComponent },
  { path: 'type-user-form/:id', component: TypeUserFormComponent },
  { path: 'type-user-list', component: TypeUserListComponent },
  { path: 'user-form', component: UserFormComponent },
  { path: 'user-form/:id', component: UserFormComponent },
  { path: 'user-list', component: UserListComponent },
  { path: '', redirectTo: '/user-list', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
