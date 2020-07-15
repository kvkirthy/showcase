import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BooksComponent } from './pages/books/books.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { HomeComponent } from './home/home.component';

// import { HomeComponent } from './pages/home/home.component';
// import { OpinionComponent } from './pages/opinion/opinion.component';

export const pages = [  
  {
    path: 'showcase',
    component: HomeComponent,
    children: [
      {
        path: 'blog',
        component: BlogsComponent,
        label: "Blog"
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
    ]
  }];

const routes: Routes = [ 
  {
    path: 'showcase',
    redirectTo: '/showcase/blog',
    pathMatch: 'prefix'
  },
  ...pages,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcaseRoutingModule { }
