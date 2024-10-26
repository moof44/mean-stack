import { inject, Injectable, signal } from '@angular/core';
import { Post, PostResponse, PostsResponse } from './post.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  // inject
  private _http = inject(HttpClient);

  posts = signal<Post[]>([]);

  addPost(post: Post) {
    this._http.post<PostResponse>(
      'http://localhost:3000/api/posts',
      post
    ).subscribe((resp:PostResponse)=>{
      console.log('resp', resp);
      let response = {...resp.post, id: resp.post._id} as Post;
      delete response._id;
      const temp = [...this.posts()];
      temp.push(response);
      this.posts.set(temp);
    })
  }

  fetchPost(){
    this._http.get<PostsResponse>('http://localhost:3000/api/posts')
      .pipe(map((post)=> 
        post.posts.map(
          post=>({
            title: post.title,
            content: post.content,
            id: post._id,
          } as Post
        ))
      ))
      .subscribe(posts => {
        this.posts.set(posts);
      })
  }

  deletePost(id: string){
    this._http.delete(`http://localhost:3000/api/posts/${id}`).subscribe(v=>{
      console.log('delete', v)
      const posts = this.posts();
      posts.splice(posts.findIndex(p=>p.id === id), 1);
      this.posts.set(posts);
    });
  }

  deletePost2(id: string){
    return this._http.delete(`http://localhost:3000/api/posts/${id}`)
  }
}
