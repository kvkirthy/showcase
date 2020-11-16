import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { NewspaperEdition } from '../models/editions';
import { selectedEdition } from '../ngrx/edition.selectors';
import { getStoryByCateory } from '../ngrx/story.selectors';
import { NewspaperPost, StoryCategory } from '../models/newspaper-post';
import { MatDialog } from '@angular/material/dialog';
import { PostDetailsComponent } from '../post-details/post-details.component';

@Component({
  selector: 'app-nine-per-page-layout',
  templateUrl: './nine-per-page-layout.component.html',
  styleUrls: ['./nine-per-page-layout.component.css']
})
export class NewspaperMainComponent implements OnInit {

  storyGroups: Array<Array<NewspaperPost>>;

  bannerStories: NewspaperPost[] = [];
  currentEdition: NewspaperEdition;

  constructor(private store: Store, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.store
      .select(selectedEdition)
      .subscribe((data: NewspaperEdition) => {
        this.bannerStories = [];
        this.storyGroups = [];
        this.currentEdition = data;
        if (data && data._id) {
          this.store
            .select(getStoryByCateory, { category: StoryCategory.Banner, editionId: data._id })
            .subscribe((data) => {
              if (data) {
                if (data && data.length > 0 && data[0].edition._id === this.currentEdition._id) {
                  this.bannerStories = this.bannerStories.concat(data);
                  // this.bannerStories = this.bannerStories.concat(data);
                }
              }
            });

          this.store
            .select(getStoryByCateory, { category: StoryCategory.Highlight, editionId: data._id })
            .subscribe((data) => {
              if (data) {
                if (data && data.length > 0 && data[0].edition._id === this.currentEdition._id) {
                  this.groupStories(data);
                }
              }
            });

            this.store
            .select(getStoryByCateory, { category: StoryCategory.NewsBit, editionId: data._id })
            .subscribe((data) => {
              if (data) {
                if (data && data.length > 0 && data[0].edition._id === this.currentEdition._id) {
                  this.groupStories(data);
                }
              }
            });
        }
      });
  }

  getSectionCssClassByRow(rowIndex: number, set: number):string{
    if( (rowIndex % 2 === 0 && set === 1) || (rowIndex % 2 !== 0 && set === 2) ){
      return "col-2";
    } else {
      return "col-6";
    }
  }

  getStoryCssClassByRow(rowIndex: number, set: number):string{
    if( (rowIndex % 2 === 0 && set === 1) || (rowIndex % 2 !== 0 && set === 2) ){
      return "col-12";
    } else {
      return "col-6";
    }
  }

  isValidForLeftSet(rowIndex: number, storyIndex: number):boolean{
    if( (rowIndex % 2 === 0 && storyIndex < 2) || (rowIndex % 2 !== 0 && storyIndex < 6) ){
      return true;
    } else {
      return false;
    }
  }

  isValidForRightSet(rowIndex: number, storyIndex: number):boolean{
    if( (rowIndex % 2 === 0 && storyIndex >= 2 && storyIndex < 8) || (rowIndex % 2 !== 0 && storyIndex >= 6 && storyIndex < 8) ){
      return true;
    } else {
      return false;
    }
  }

  storySelected(story: NewspaperPost){
    this.dialog.open(PostDetailsComponent, {
      data: story,
      height: '100%',
      width: '100%',
      panelClass: 'no-margin-padding'
    });
  }

  groupStories(availableStories: NewspaperPost[]){

    if(!this.storyGroups){
      this.storyGroups = new Array<Array<NewspaperPost>>();
    }
    let uniqueStories: NewspaperPost[] = this.getUniqueStories(availableStories);

    for(let i=this.storyGroups.length; uniqueStories.length > 0; i++){
      if(this.storyGroups[i-1] && this.storyGroups[i-1].length < 9){
        // there is a deficit in the previous count of story groups. 
        // add stories to fill up the length to 9
        let remainingStories = uniqueStories.splice(0,9-this.storyGroups[i-1].length); 
        this.storyGroups[i-1] = this.storyGroups[i-1].concat(remainingStories);
      }

      this.storyGroups[i] = uniqueStories.splice(0,9);
      
    }
  }

  private getUniqueStories(availableStories: NewspaperPost[]){
    let uniqueStories: NewspaperPost[] = [];
    let allStories: NewspaperPost[] = [];
    if(this.storyGroups ){
      this.storyGroups.map( (sg) => {
        allStories = allStories.concat(sg);
      });
  
      availableStories.map(s => {
        let x = allStories.find(as => as._id === s._id);
        if(!!! x){
          uniqueStories.push(s);
        }
      });
    }

    return uniqueStories;

  }

  formatDescription(str:string, length:number): string{
    if(str.length > length){
      return str.substring(0, length) + "...";
    } else {
      return str;
    }
  }

}
