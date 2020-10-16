import { NewspaperPost } from 'src/app/newspaper/models/newspaper-post';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {

  @Input("Title") listTitle: string = '';
  @Input("Stories") stories: Array<NewspaperPost>;
  @Input("IsRemoveEnabled") remove: boolean = false;
  @Output("SelectedPost") selectedPost = new EventEmitter<NewspaperPost>();
  @Output("RemovedPost") removedPost = new EventEmitter<NewspaperPost>();


  constructor() { }
  ngOnInit(): void { }

  onSelect(post: NewspaperPost){
    this.selectedPost.emit(post);
  }

  removeItem(item: NewspaperPost){
    this.stories.splice(this.stories.indexOf(item),1);
    this.removedPost.emit(item);
  }

}
