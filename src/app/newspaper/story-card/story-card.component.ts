import { NewspaperPost } from '../models/newspaper-post';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css']
})
export class StoryCardComponent implements OnInit {

  @Input() showCardRaised = false;
  @Input() story: NewspaperPost;
  @Input() title: string;
  @Input() description: string;
  @Input() storyContent: string;
  @Input() customActionTitle: string;
  @Input() showHeaderAction: boolean = false;
  @Input() primaryActionTitle = "more"
  @Output() headerAction= new EventEmitter();
  @Output() OnStorySelected = new EventEmitter<NewspaperPost>();

  constructor() { }

  ngOnInit(): void {
  }

  OnMoreSelect(){
    this.OnStorySelected.emit(this.story);
  }

  headerActionClicked(){
    this.headerAction.emit(true);
  }

  customAction(){
  }

}
