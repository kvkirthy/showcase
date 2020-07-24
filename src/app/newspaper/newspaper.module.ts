import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ComposeComponent } from './compose/compose.component';
import { RegisterComponent } from './register/register.component';
import { NewspaperRoutingModule } from './newspaper-routing.module';
import { StoryListComponent } from './story-list/story-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { BannerStoryComponent } from './banner-story/banner-story.component';
import { ImagePickerComponent } from './image-picker/image-picker.component';

@NgModule({
  declarations: [
    HomeComponent, 
    LoginComponent, 
    ComposeComponent, 
    RegisterComponent, 
    CreatePostComponent, 
    BannerStoryComponent, StoryListComponent, ImagePickerComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatStepperModule,
    MatToolbarModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    NewspaperRoutingModule
  ]
})
export class NewspaperModule { }
