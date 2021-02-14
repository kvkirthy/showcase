import { Store } from '@ngrx/store';
import * as actions from '../ngrx/edition.actions';
import { Component, OnInit } from '@angular/core';
import { NewspaperEdition } from '../models/editions';

import { getAllNewspaperEditions } from '../ngrx/edition.actions';
import { publishedNewspaperEditions, selectedEdition } from 'src/app/newspaper/ngrx/edition.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  editions: NewspaperEdition[];
  selectedEditionTitle: string = '';
  selectedEditionDateCreated: Date;
  sitePrimaryMessage = "Be up to date with JavaScript news and updates!";
  siteSecondaryMessage = "In the fast moving technology space, it's important to know the trends. At the same time, it's not easy. It consumes energy and time. JavaScript Times makes life easy by providing regular updates in a quick summary.";

  constructor(private store: Store) { }

  ngOnInit(): void {
    
    this.store.dispatch(getAllNewspaperEditions());

    this.store
    .select(publishedNewspaperEditions)
    .subscribe( (data) => {
      this.editions = data;
      if(data && data[0]){
        this.selectedEditionTitle = data[0].title;
        this.selectedEditionDateCreated = data[0].dateCreated;
        // this.store.dispatch(actions.setEdition(data[0]));
      }
    });

    this.store
    .select(selectedEdition)
    .subscribe( (selectedEdition: NewspaperEdition) => {
      if(selectedEdition){
        this.selectedEditionTitle = selectedEdition.title;
        this.selectedEditionDateCreated = selectedEdition.dateCreated;
        // this.store.dispatch(actions.setEdition(selectedEdition));
      }
    });
  }

}
