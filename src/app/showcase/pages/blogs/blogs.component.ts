import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Blog } from 'src/app/showcase/models/blog';
import { BlogsService } from './blogs.service';
import * as blogData from './blogs-data.json';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogList$: Observable<Array<Blog>>;
  highlightedBlog: Blog;
  constructor(private blogService: BlogsService) { }

  ngOnInit() {
    let allBlogs = [];
    this.blogService
      .getBlogs()
      .subscribe(data => {
        allBlogs = data;
        this.highlightedBlog = allBlogs.find(i => i.isHighlighted);
        this.blogList$ = of(allBlogs.filter(i => !i.isHighlighted ));
      });
  }

  cardClickHandler(linkToBlog){
    window.open(linkToBlog, "__blog");
  }

}
