import { Injectable, signal } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts = signal<Post[]>([]);

  constructor() { }

  addPost(post: Post) {
    const temp = [...this.posts()];
    temp.push(post);
    this.posts.set(temp);
  }
}
