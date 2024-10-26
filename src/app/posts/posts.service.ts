import { inject, Injectable, signal } from '@angular/core';
import { Post, PostsResponse } from './post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  // inject
  private _http = inject(HttpClient);

  posts = signal<Post[]>([]);

  addPost(post: Post) {
    this._http.post(
      'http://localhost:3000/api/posts',
      post
    ).subscribe((resp)=>{
      const temp = [...this.posts()];
      temp.push(post);
      this.posts.set(temp);
    })
  }

  fetchPost(){
    this._http.get<PostsResponse>('http://localhost:3000/api/posts')
      .subscribe(posts => {
        this.posts.set(posts.posts);
      })
  }
}
