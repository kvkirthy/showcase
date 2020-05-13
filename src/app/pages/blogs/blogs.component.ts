import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Blog } from 'src/app/models/blog';
import * as blogData from './blogs-data.json';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogList$: Observable<Array<Blog>>;
  highlightedBlog: Blog;
  constructor() { }

  ngOnInit() {
    let allBlogs = blogData.blogs;
    this.highlightedBlog = allBlogs.find(i => i.isHighlighted);
    this.blogList$ = of(allBlogs.filter(i => !i.isHighlighted ));
  }

  cardClickHandler(linkToBlog){
    window.open(linkToBlog, "__blog");
  }

}
