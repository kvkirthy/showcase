import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BooksComponent } from './pages/books/books.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { OpinionComponent } from './pages/opinion/opinion.component';
import { ScToolbarComponent } from '../components/sc-toolbar/sc-toolbar.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

import { ShowcaseRoutingModule } from './showcase-routing.module';


@NgModule({
  declarations: [    
    HomeComponent,
    AboutComponent,
    BooksComponent,
    OpinionComponent,
    BlogsComponent,
    ScToolbarComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    ShowcaseRoutingModule
  ]
})
export class ShowcaseModule { }
