import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { getAllStories } from '../ngrx/story.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getAllStories());

  }

}
