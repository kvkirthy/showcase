import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewspaperEdition } from '../models/editions';
import { selectedEdition } from '../ngrx/edition.selectors';
import { getStoryByCateory } from '../ngrx/story.selectors';
import { NewspaperPost, StoryCategory } from '../models/newspaper-post';

@Component({
  selector: 'app-single-column-layout',
  templateUrl: './single-column-layout.component.html',
  styleUrls: ['./single-column-layout.component.css']
})
export class SingleColumnLayoutComponent implements OnInit {

  bannerStories: NewspaperPost[] = [];
  highlightStories: NewspaperPost[] = [];
  newsbitStories: NewspaperPost[] = [];

  constructor(private store: Store, private dialog: MatDialog) { }

  ngOnInit(): void {

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

}
