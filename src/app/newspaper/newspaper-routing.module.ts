import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [{
  path: 'newspaper',
  redirectTo: 'newspaper/admin/register',
  pathMatch: 'full'
}, {
  path: 'newspaper',
  component: HomeComponent,
  children: [{
    path: 'admin/register',
    component: RegisterComponent
  }, {
    path: 'admin/login',
    component: LoginComponent
  },{
    path: 'admin/post',
    component: CreatePostComponent
  }]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewspaperRoutingModule { }
