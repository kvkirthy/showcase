import { Store } from '@ngrx/store';
import * as actions from '../ngrx/edition.actions';
import { NewspaperEdition } from '../models/editions';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { selectedEdition as selectedEditionSelector } from '../ngrx/edition.selectors';

@Component({
  selector: 'app-newspaper-edition-list',
  styleUrls: ['./newspaper-edition-list.component.css'],
  templateUrl: './newspaper-edition-list.component.html'
})
export class NewspaperEditionListComponent implements OnInit, OnChanges {

  selectedEdition: NewspaperEdition = new NewspaperEdition();
  @Input('editions') editionsList: NewspaperEdition[];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store
    .select(selectedEditionSelector)
    .subscribe( (data: NewspaperEdition) => {
      if(data){
        this.selectedEdition = data;
      }
    });
  }

  ngOnChanges(){
    if(this.editionsList?.length > 0 && !this.selectedEdition._id){
      this.store.dispatch(actions.setEdition(this.editionsList[0]));
    }
  }

  showSelectedEdition($event){
    this.store.dispatch(actions.setEdition(this.editionsList.find(i => i._id === $event.value)));
  }

}