import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IComment } from '../../../models/comment-model';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css',
})
export class CommentFormComponent {
  @Output() commentEvent = new EventEmitter<IComment>();

  // @ViewChild('commentForm') theForm!: NgForm;

  // submitForm() {
  // console.log(this.theForm);
  // }

  submitForm(commentForm: NgForm) {
    // console.log(commentForm);
    let newComment = {
      ...commentForm.value,
      stars: +commentForm.value.stars,
    };
    this.commentEvent.emit(newComment);
  }
}
