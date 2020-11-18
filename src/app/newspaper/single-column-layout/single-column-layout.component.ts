import { Store } from '@ngrx/store';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NewspaperEdition } from '../models/editions';
import { Component, Inject, OnInit } from '@angular/core';
import { selectedEdition } from '../ngrx/edition.selectors';
import { getStoryByCateory } from '../ngrx/story.selectors';
import { NewspaperPost, StoryCategory } from '../models/newspaper-post';
import { PostDetailsComponent } from '../post-details/post-details.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-single-column-layout',
  templateUrl: './single-column-layout.component.html',
  styleUrls: ['./single-column-layout.component.css']
})
export class SingleColumnLayoutComponent implements OnInit {

  bannerStories: NewspaperPost[] = [];
  highlightStories: NewspaperPost[] = [];
  newsbitStories: NewspaperPost[] = [];
  window: Window;

  constructor(private store: Store, 
    @Inject(DOCUMENT) private document: Document,
    private dialog: MatBottomSheet) { }

  ngOnInit(): void {

    this.window = this.document.defaultView;

    this.store
      .select(selectedEdition)
      .subscribe((data: NewspaperEdition) => {
        if (data && data._id) {
          this.store
            .select(getStoryByCateory, { category: StoryCategory.Banner, editionId: data._id })
            .subscribe((data) => {
              if (data) {
                if (data && data.length > 0) {
                  this.bannerStories = data;
                }
              }
            });

          this.store
            .select(getStoryByCateory, { category: StoryCategory.Highlight, editionId: data._id })
            .subscribe((data) => {
              if (data) {
                if (data && data.length > 0) {
                  this.highlightStories = data;
                }
              }
            });

            this.store
            .select(getStoryByCateory, { category: StoryCategory.NewsBit, editionId: data._id })
            .subscribe((data) => {
              if (data) {
                if (data && data.length > 0) {
                  this.newsbitStories = data;
                }
              }
            });
        }
      });
  }

  formatDescription(str:string, length:number): string{
    if(str.length > length){
      return str.substring(0, length) + "...";
    } else {
      return str;
    }
  }

  openUrl(story:NewspaperPost){
    this.window.open(story.linkToPost, "__blank");
  }

  showModelDialog(story: NewspaperPost){

    this.dialog.open(PostDetailsComponent, {
      data: story
    });
    // document.getElementById(story._id).scrollIntoView({ block:'center', inline:'center', behavior: 'smooth'});
    // this.dialog.open(PostDetailsComponent, {
    //   data: story,
    //   width: '100%',
    //   panelClass: 'no-margin-padding'
    // });
  }

}
