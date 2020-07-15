import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private httpClient: HttpClient) { }

  getBlogs(): Observable<Blog[]>{
    return this.httpClient
      .get<Blog[]>('/blog-posts');
  }
}
