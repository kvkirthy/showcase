import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css']
})
export class StoryCardComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() imageUrl: string;
  @Input() linkUrl: string;

  constructor() { }

  ngOnInit() {
  }

  onCardClick(){
    window.open(this.linkUrl, "__blog");
  }

}
