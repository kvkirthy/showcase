import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NewspaperEdition } from '../models/editions';
import { NewspaperPost, StoryCategory } from '../models/newspaper-post';
import { selectedEdition } from '../ngrx/edition.selectors';
import { getAssignedStories, getStoryByCateory } from '../ngrx/story.selectors';

@Component({
  selector: 'app-newspaper-main',
  templateUrl: './newspaper-main.component.html',
  styleUrls: ['./newspaper-main.component.css']
})
export class NewspaperMainComponent implements OnInit {

  stories: NewspaperPost[] = [];
  bannerStory: NewspaperPost;
  currentEdition: NewspaperEdition;

  constructor(private store: Store) { }

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
                  this.bannerStory = data[0];
                }
              }
            });

          this.store
            .select(getStoryByCateory, { category: StoryCategory.Highlight, editionId: data._id })
            .subscribe((data) => {
              if (data) {
                if (data && data.length > 0) {
                  this.stories = data;
                }
              }
            });

            this.store
            .select(getStoryByCateory, { category: StoryCategory.NewsBit, editionId: data._id })
            .subscribe((data) => {
              if (data) {
                if (data && data.length > 0) {
                  this.stories = this.stories.concat(data);
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
