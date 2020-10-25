import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css']
})
export class StoryCardComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() customActionTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

  customAction(){

  }

}
