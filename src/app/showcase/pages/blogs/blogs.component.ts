import * as _ from 'lodash';
import { of, Observable } from 'rxjs';
import { BlogsService } from './blogs.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/showcase/models/blog';

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
        allBlogs = data.sort( (a,b) =>  (a.dateAdded && b.dateAdded) ? a.dateAdded.localeCompare(b.dateAdded): 0);
        allBlogs = allBlogs.reverse();
        this.highlightedBlog = allBlogs.find(i => i.isHighlighted);
        if( !!! this.highlightedBlog ){
          allBlogs[0].isHighlighted = true;
          this.highlightedBlog = allBlogs[0];
        }

        this.blogList$ = of(allBlogs.filter(i => !i.isHighlighted ));
      });
  }

  cardClickHandler(linkToBlog){
    window.open(linkToBlog, "__blog");
  }

  formatDate(dateValue: string){
    let d = new Date(dateValue) 
    return d.toDateString();
  }

}
