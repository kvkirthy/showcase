import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AboutComponent } from './pages/about/about.component';
import { BooksComponent } from './pages/books/books.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ShowcaseRoutingModule } from './showcase-routing.module';
import { OpinionComponent } from './pages/opinion/opinion.component';
import { ScToolbarComponent } from '../components/sc-toolbar/sc-toolbar.component';
import { CreateBlogComponent } from './pages/create-blog/create-blog.component';
import { ApplicationsComponent } from './pages/applications/applications.component';

@NgModule({
  declarations: [    
    HomeComponent,
    BooksComponent,
    AboutComponent,
    BlogsComponent,
    OpinionComponent,
    ScToolbarComponent,
    CreateBlogComponent,
    ApplicationsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    ReactiveFormsModule,
    ShowcaseRoutingModule
  ]
})
export class ShowcaseModule { }
