import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { StoryEffects } from './ngrx/story.effects';
import { getStoryReducer } from './ngrx/story.reducer';
import { EditionEffects } from './ngrx/edition.effects';
import { getEditionReducer } from './ngrx/edition.reducer';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ComposeComponent } from './compose/compose.component';
import { RegisterComponent } from './register/register.component';
import { NewspaperRoutingModule } from './newspaper-routing.module';
import { StoryCardComponent } from './story-card/story-card.component';
import { StoryListComponent } from './story-list/story-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { UpdatePostsComponent } from './update-posts/update-posts.component';
import { BannerStoryComponent } from './banner-story/banner-story.component';
import { ImagePickerComponent } from './image-picker/image-picker.component';
import { NewspaperMainComponent } from './nine-per-page-layout/nine-per-page-layout.component';
import { CreateNewspaperEditionComponent } from './create-newspaper-edition/create-newspaper-edition.component';
import { MainComponent } from './main/main.component';
import { NewspaperEditionListComponent } from './newspaper-edition-list/newspaper-edition-list.component';

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
    CreateNewspaperEditionComponent,
    StoryCardComponent,
    NewspaperMainComponent,
    UpdatePostsComponent,
    MainComponent,
    NewspaperEditionListComponent, 
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    NewspaperRoutingModule,
    EffectsModule.forFeature([StoryEffects, EditionEffects]),
    StoreModule.forFeature( 'newspaperStories', {stories: getStoryReducer }),
    StoreModule.forFeature( 'newspaperEditions', getEditionReducer),
  ]
})
export class NewspaperModule { }
