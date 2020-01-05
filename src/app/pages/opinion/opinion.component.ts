import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {

  twttr = window['twttr'] || {};

  constructor() { }

  ngOnInit() {
    this.twttr && this.twttr.widgets.load();
  }

}
