import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnChanges, SimpleChanges, type OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListComponent implements OnInit{
  private _cd = inject(ChangeDetectorRef);
  private postsService = inject(PostsService);

  @Input() posts:Post[] = [];

  ngOnInit(): void { }

    // {title: 'First Post', content: 'This is the first post\'s content'},
    // {title: 'Second Post', content: 'This is the second post\'s content'},
    // {title: 'Third Post', content: 'This is the third post\'s content' },

}
