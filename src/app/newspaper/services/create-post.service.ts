import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  constructor(private httpClient: HttpClient) { }

  getBanner(){
    return this.httpClient.get('/storage');
  }
}
