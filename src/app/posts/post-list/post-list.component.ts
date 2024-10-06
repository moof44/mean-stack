import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

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
export class PostListComponent implements OnInit {

  ngOnInit(): void { }

}
