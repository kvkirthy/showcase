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
  blogCount = 0;
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
        this.blogCount = allBlogs.length;
        allBlogs = allBlogs.reverse();

        this.highlightedBlog = allBlogs.find(i => i.isHighlighted);
        if( !!! this.highlightedBlog ){
          allBlogs[0].isHighlighted = true;
          this.highlightedBlog = allBlogs[0];
        }
        this.blogList$ = of(allBlogs.filter(i => !i.isHighlighted ));

        this.allBlogs = allBlogs;
        let allTags = []
        const extractTagsFromBlogs = () => {
          allBlogs.map( (i: Blog) => {
            if(i.tags){
              allTags = allTags.concat(i.tags);
            }
          });
          let originalTags = allTags;
          allTags = [...new Set(allTags)]; // tags are unique now
          this.tags = allTags.map( tag => {
             return { tag, count: originalTags.filter( t => t === tag ).length};
          })
          .sort( (t1,t2) => t2.count - t1.count);
        }

        extractTagsFromBlogs();
        this.willSetupTagsByScreenSize();


      });
  }

  private willSetupTagsByScreenSize(){
    this.desktopTags= this.tags.slice(0,8);
    this.mobileTags = this.tags.slice(0,2);
    this.mobileTags.push({tag:"More..."});
    this.desktopTags.push({tag:"More..."});
  }

  onChipSelected(value){
      this.selectedTag ={
        [value.tag]: true
      };

      if(value === 'all'){
        this.highlightedBlog = this.allBlogs.find(i => i.isHighlighted);
        this.blogList$ = of(this.allBlogs.filter(i => !i.isHighlighted ));
        this.selectedTag = {
          all: true
        };
        return;
      }

      if(value.tag === 'More...'){
        this.mobileTags = this.desktopTags = this.tags;

        if(this.mobileTags.findIndex(t => t.tag === "Less") < 0){
          this.mobileTags.push({tag: "Less"});
        }
        if(this.desktopTags.findIndex(t => t.tag === "Less") < 0){
          this.desktopTags.push({tag: "Less"});
        }
        
        this.selectedTag = {
          all: true
        };
        return;
      }

      if(value.tag === "Less"){
        this.willSetupTagsByScreenSize();
        this.selectedTag = {
          all: true
        };
        return;
      }
      
      this.highlightedBlog = this.allBlogs.find(i => i.isHighlighted && i?.tags?.includes(value.tag));
      this.blogList$ = of(this.allBlogs.filter(i => !i.isHighlighted &&  i?.tags?.includes(value.tag)));
  }

  cardClickHandler(linkToBlog){
    window.open(linkToBlog, "__blog");
  }

  formatDate(dateValue: string){
    if(dateValue){
      let d = new Date(dateValue) 
      return d.toDateString();
    }

    return '-';
  }

}
