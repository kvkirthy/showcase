import * as _ from 'lodash';
import { of, Observable } from 'rxjs';
import { BlogsService } from './blogs.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/showcase/models/blog';
import { TileStyler } from '@angular/material/grid-list/tile-styler';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  tags = [];
  mobileTags = [];
  desktopTags = [];
  selectedTag: {} = {
    all: true
  };
  highlightedBlog: Blog;
  allBlogs: Array<Blog> = [];
  blogList$: Observable<Array<Blog>>;

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

        this.allBlogs = allBlogs;

        const extractTagsFromBlogs = () => {
          allBlogs.map( (i: Blog) => {
            if(i.tags){
              this.tags = this.tags.concat(i.tags);
            }
          });
          this.tags = [...new Set(this.tags)]; // tags are unique now
        }

        extractTagsFromBlogs();
        this.willSetupTagsByScreenSize();


      });
  }

  private willSetupTagsByScreenSize(){
    this.desktopTags= this.tags.slice(0,8);
    this.mobileTags = this.tags.slice(0,2);
    this.mobileTags.push("More...");
    this.desktopTags.push("More...");
  }

  onChipSelected(value){
      this.selectedTag ={
        [value]: true
      };

      if(value === 'all'){
        this.highlightedBlog = this.allBlogs.find(i => i.isHighlighted);
        this.blogList$ = of(this.allBlogs.filter(i => !i.isHighlighted ));
        return;
      }

      if(value === 'More...'){
        this.mobileTags = this.desktopTags = this.tags;

        if(this.mobileTags.indexOf("Less") < 0){
          this.mobileTags.push("Less");
        }
        if(this.desktopTags.indexOf("Less") < 0){
          this.desktopTags.push("Less");
        }
        
        this.selectedTag = {
          all: true
        };
        return;
      }

      if(value === "Less"){
        this.willSetupTagsByScreenSize();
        this.selectedTag = {
          all: true
        };
        return;
      }
      
      this.highlightedBlog = this.allBlogs.find(i => i.isHighlighted && i?.tags?.includes(value));
      this.blogList$ = of(this.allBlogs.filter(i => !i.isHighlighted &&  i?.tags?.includes(value)));
  }

  cardClickHandler(linkToBlog){
    window.open(linkToBlog, "__blog");
  }

  formatDate(dateValue: string){
    let d = new Date(dateValue) 
    return d.toDateString();
  }

}
