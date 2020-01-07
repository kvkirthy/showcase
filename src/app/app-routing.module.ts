import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { AboutComponent } from './pages/about/about.component';
import { BooksComponent } from './pages/books/books.component';
import { OpinionComponent } from './pages/opinion/opinion.component';


export const pages= [  
  {
    path: 'opinion',
    component: OpinionComponent,
    label: "Opinion"
  },
  {
    path: 'books',
    component: BooksComponent,
    label: "Books"
  },
  {
    path: 'about',
    component: AboutComponent,
    label: "About Me!"
  }
];

const routes: Routes = [ ...pages,
  {
    path: '',
    redirectTo: '/opinion',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
