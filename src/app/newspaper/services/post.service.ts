import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewspaperPost, NewspaperPosts } from 'src/app/newspaper/models/newspaper-post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getBanners(){
    return this.httpClient.get('/storage');
  }

  create(post: NewspaperPost){
    return this.httpClient
      .post<NewspaperPost>('/newspaper-post',post);
  }

  getActiveStories() : Observable<NewspaperPost[]> {
    return this.httpClient
      .get<NewspaperPost[]>('/newspaper-post');
  }

  updateStoriesForEdition(posts: NewspaperPosts){
    return this.httpClient
      .post('/newspaper-post/update-list',posts.posts);
  }

}
