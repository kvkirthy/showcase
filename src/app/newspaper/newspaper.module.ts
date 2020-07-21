import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewspaperRoutingModule } from './newspaper-routing.module';
import { CreatePostComponent } from './create-post/create-post.component';


@NgModule({
  declarations: [HomeComponent, RegisterComponent, LoginComponent, CreatePostComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    NewspaperRoutingModule
  ]
})
export class NewspaperModule { }
