import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { NewspaperEdition } from '../models/editions';
import { getAllNewspaperEditions } from '../ngrx/edition.actions';
import editorSelector, { selectedEdition } from 'src/app/newspaper/ngrx/edition.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  editions: NewspaperEdition[];

  constructor(private store: Store) { }

  ngOnInit(): void {
    
    this.store.dispatch(getAllNewspaperEditions());

    this.store
    .select(editorSelector)
    .subscribe( (data) => {
      this.editions = data;
    });
  }

}
