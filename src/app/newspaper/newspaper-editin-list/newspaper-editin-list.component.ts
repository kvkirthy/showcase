import { Store } from '@ngrx/store';
import * as actions from '../ngrx/edition.actions';
import { NewspaperEdition } from '../models/editions';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-newspaper-editin-list',
  styleUrls: ['./newspaper-editin-list.component.css'],
  templateUrl: './newspaper-editin-list.component.html'
})
export class NewspaperEditinListComponent implements OnInit {

  selectedEdition: NewspaperEdition;
  @Input('editions') editionsList: NewspaperEdition[];

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  showSelectedEdition($event){
    this.store.dispatch(actions.setEdition(this.editionsList.find(i => i._id === $event.value)));
  }

}
