import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { NewspaperEdition } from '../models/editions';
import { selectedEdition } from '../ngrx/edition.selectors';
import { getStoryByCateory } from '../ngrx/story.selectors';
import { NewspaperPost, StoryCategory } from '../models/newspaper-post';

@Component({
  selector: 'app-newspaper-main',
  templateUrl: './newspaper-main.component.html',
  styleUrls: ['./newspaper-main.component.css']
})
export class NewspaperMainComponent implements OnInit {

  storyGroups: Array<Array<NewspaperPost>>;

  bannerStories: NewspaperPost[] = [];
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
                  this.bannerStories = this.bannerStories.concat(data);
                }
              }
            });

          this.store
            .select(getStoryByCateory, { category: StoryCategory.Highlight, editionId: data._id })
            .subscribe((data) => {
              if (data) {
                if (data && data.length > 0) {
                  this.groupStories(data);
                }
              }
            });

            this.store
            .select(getStoryByCateory, { category: StoryCategory.NewsBit, editionId: data._id })
            .subscribe((data) => {
              if (data) {
                if (data && data.length > 0) {
                  this.groupStories(data);
                }
              }
            });
        }
      });
  }

  groupStories(availableStories: NewspaperPost[]){
    if(!this.storyGroups){
      this.storyGroups = new Array<Array<NewspaperPost>>();
    }

    for(let i=0; availableStories.length > 0; i++){
      let tStories: Array<NewspaperPost> = availableStories.splice(0,9);
      this.storyGroups[i] = tStories;
    }
  }

  formatDescription(str:string, length:number): string{
    if(str.length > length){
      return str.substring(0, length) + "...";
    } else {
      return str;
    }
  }

}
