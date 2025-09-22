import { Component, Input } from '@angular/core';
import { IComment } from '../../../models/comment-model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent {
  @Input() comments!: Array<IComment>;

  tab = 0;

  onAddNewComment(comment: IComment) {
    this.comments.push(comment);
    this.tab = 1;
  }
}
