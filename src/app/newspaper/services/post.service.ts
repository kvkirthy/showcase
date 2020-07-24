import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewspaperPost } from 'src/app/newspaper/models/newspaper-post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getBanners(){
    return this.httpClient.get('/storage');
  }

  createPost(post: NewspaperPost){
    return this.httpClient
      .post<NewspaperPost>('/newspaper-post',post);
  }

  getActiveStories(){
    return this.httpClient
      .get<Array<NewspaperPost>>('/newspaper-post');
  }
}
