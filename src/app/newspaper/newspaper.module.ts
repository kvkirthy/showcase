import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { Effect, EffectsModule } from '@ngrx/effects';

import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { StoryEffects } from './ngrx/story.effects';
import { HomeComponent } from './home/home.component';
import { getStoryReducer } from './ngrx/story.reducer';
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
    StoryListComponent, 
    CreatePostComponent, 
    ImagePickerComponent,
    BannerStoryComponent, 
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
    NewspaperRoutingModule,
    EffectsModule.forFeature([StoryEffects]),
    StoreModule.forFeature( 'newspaperStories', {stories: getStoryReducer }),
  ]
})
export class NewspaperModule { }
