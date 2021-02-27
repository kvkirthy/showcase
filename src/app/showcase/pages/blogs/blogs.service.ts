import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from 'src/app/showcase/models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private httpClient: HttpClient) { }

  getBlogs(): Observable<Blog[]>{
    return this.httpClient
      .get<Blog[]>('/blog-posts');
  }

  getAllAvatars(): Observable<Array<string>> {
    return this.httpClient
      .get<Array<string>>('/storage/avatars');
  }

  getAllBanners(): Observable<Array<string>> {
    return this.httpClient
      .get<Array<string>>('/storage');
  }

  create(blog: Blog) {
    return this.httpClient.post('/blog-posts',blog);
  }
}
