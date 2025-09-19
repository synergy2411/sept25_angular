import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css',
})
export class CommentFormComponent {
  submitForm(commentForm: NgForm) {
    // console.log(commentForm);
    let newComment = {
      ...commentForm.value,
      stars: +commentForm.value.stars,
    };
    console.log(newComment);
  }
}
