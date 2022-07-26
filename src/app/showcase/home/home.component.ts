import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pages = [{
    path: 'blog',
    label: "Blog"
  },
  {
    path: 'books',
    label: "Books"
  },
  // {
  //   path: 'applications',
  //   label: 'Applications'
  // },
  {
    path: 'about',
    label: "About Me!"
  }];
}
