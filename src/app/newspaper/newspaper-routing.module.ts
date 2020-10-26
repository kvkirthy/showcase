import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ComposeComponent } from './compose/compose.component';
import { RegisterComponent } from './register/register.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { UpdatePostsComponent } from './update-posts/update-posts.component';

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
  },{
    path: 'admin/compose',
    component: ComposeComponent
  },{
    path: 'admin/update-posts',
    component: UpdatePostsComponent
  }]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewspaperRoutingModule { }
