import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewspaperEdition } from '../models/editions';

@Injectable({
  providedIn: 'root'
})
export class EditionService {

  constructor(private httpClient: HttpClient) { }

  create(edition: NewspaperEdition){
    return this.httpClient
      .post<NewspaperEdition>('/newspaper-edition', edition);
  }

  getAll(){
    return this.httpClient
      .get<NewspaperEdition[]>('/newspaper-edition');
  }

  
  
}
