import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, inject, type OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { PostsService } from '../posts.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListComponent implements OnInit{
  posts = inject(PostsService).posts;
  postService = inject(PostsService);
  cdr = inject(ChangeDetectorRef);


  constructor(){
    effect(()=>{
      console.log('posts', this.posts());
      this.cdr.detectChanges();
    })
  }

  ngOnInit(): void { 
    this.postService.fetchPost();
  }

  onDelete(id: string){
    //this.postService.deletePost(id);
    this.postService.deletePost2(id).subscribe(v=>{
      console.log('delete', v)
      const posts = this.posts();
      posts.splice(posts.findIndex(p=>p.id === id), 1);
      this.posts.set(posts);
      this.cdr.detectChanges();
    })
  }

}
