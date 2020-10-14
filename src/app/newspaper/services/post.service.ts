import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewspaperPost, NewspaperPosts } from 'src/app/newspaper/models/newspaper-post';
import { Observable } from 'rxjs';

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

  getActiveStories() : Observable<NewspaperPost[]> {
    return this.httpClient
      .get<NewspaperPost[]>('/newspaper-post');
  }
}
