import { NewspaperPost } from '../models/newspaper-post';
import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner-story-card',
  templateUrl: './banner-story.component.html',
  styleUrls: ['./banner-story.component.css']
})
export class BannerStoryComponent implements OnChanges {

  bannerImage: string;

  @Input() storyContent: string;
  @Input() story: NewspaperPost;
  @Input() showCardRaised:boolean = false;
  @Input() customActionTitle: string;
  @Input() primaryActionTitle: string = "more..."
  @Input("ShouldUseImage") shouldUseImage: boolean = true;
  
  @Output() OnImageClick = new EventEmitter();
  @Output() customActionEvent = new EventEmitter();
  @Output() primaryAction = new EventEmitter<NewspaperPost>();

  ngInit(){
    this.bannerImage = this.story.imageId;
  }

  ngOnChanges(){
    this.bannerImage = this.bannerImage || 'assets/js.jpeg';
  }

  imageClicked(){
    this.OnImageClick.emit();
  }

  customAction(){
    this.customActionEvent.emit();
  }

  onPrimaryAction(){
    this.primaryAction.emit(this.story);
  }

}
