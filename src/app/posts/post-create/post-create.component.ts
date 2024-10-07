import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, type OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,

  ],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCreateComponent implements OnInit {
  input: Post = {
    title: '',
    content: '',
  }
  enteredContent = '';
  enteredTitle = '';
  title='';
  content='';
  @Output()postCreated = new EventEmitter<Post>();

  ngOnInit(): void {}

  onAddPost(post: NgForm) {
    //const {title, content} = this.input;
    //const post = {title, content};
    this.postCreated.emit(post.value);
  }
}
