import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts$: Observable<Post[]> = new Observable((observer) => {
    observer.next([])
  });
  constructor(private apiService: ApiService) { }


  getPosts() {
    this.posts$ = this.apiService.get<Post[]>('posts');
  }
  addPost(value: string) {

    const post = new Post(Math.random(), 1, 'Test1', '');

    return this.posts$ = this.apiService.post<Post[], Post>('posts', post);
  }
}
