import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NewspaperPost } from '../models/newspaper-post';
import { getAllStories, updateStoryJson } from '../ngrx/story.actions';
import { getAssignedStories, getUnassignedStories} from '../ngrx/story.selectors';

@Component({
  selector: 'app-update-posts',
  templateUrl: './update-posts.component.html',
  styleUrls: ['./update-posts.component.css']
})
export class UpdatePostsComponent implements OnInit {

  stories: NewspaperPost[] = [];
  story: string="";

  constructor(private store: Store) { }

  ngOnInit(): void {

    this.store.dispatch(getAllStories());

    this.store
    .select(getAssignedStories)
    .subscribe((data) => {
      this.stories = this.stories.concat(data);
    });

    this.store
    .select(getUnassignedStories)
    .subscribe((data) => {
      this.stories = this.stories.concat(data);
    });
  }

  onSelectTopBanner($event){
    this.story = JSON.stringify($event, null, 4);
  }

  updateJsonText($event){
    this.story = $event.target.value;
  }

  savePost(){
    this.store.dispatch(updateStoryJson(JSON.parse(this.story) as NewspaperPost) )
  }

}
