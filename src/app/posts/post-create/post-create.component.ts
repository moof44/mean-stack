import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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
  textInput = '';
  newPost = 'No Content';

  ngOnInit(): void {}

  onAddPost() {
    this.newPost = this.textInput;
  }
}
