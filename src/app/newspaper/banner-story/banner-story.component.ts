import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-story-card',
  templateUrl: './banner-story.component.html',
  styleUrls: ['./banner-story.component.css']
})
export class BannerStoryComponent implements OnChanges {

  @Input() title: string;
  @Input() description: string;
  @Input() bannerImage: string;
  @Input() postLink: string;
  @Input() customActionTitle: string;
  @Input("ShouldUseImage") shouldUseImage: boolean = true;

  @Output() OnImageClick = new EventEmitter();
  @Output() customActionEvent = new EventEmitter();

  ngOnChanges(){
    this.bannerImage = this.bannerImage || 'assets/js.jpeg';
  }

  imageClicked(){
    this.OnImageClick.emit();
  }

  customAction(){
    this.customActionEvent.emit();
  }

}
