import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css',
})
export class CommentFormComponent {
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
    console.log(newComment);
  }
}
