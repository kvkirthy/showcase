import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NewspaperRoutingModule } from './newspaper-routing.module';
import { LoginComponent } from './login/login.component';
import { CreatePostComponent } from './create-post/create-post.component';


@NgModule({
  declarations: [HomeComponent, RegisterComponent, LoginComponent, CreatePostComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    NewspaperRoutingModule
  ]
})
export class NewspaperModule { }
