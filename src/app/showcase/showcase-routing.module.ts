import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BooksComponent } from './pages/books/books.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CreateBlogComponent } from './pages/create-blog/create-blog.component';

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
        path: 'create-blog',
        component: CreateBlogComponent,
        label: "Create Blog"
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
    pathMatch: 'full'
  },
  ...pages,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcaseRoutingModule { }
