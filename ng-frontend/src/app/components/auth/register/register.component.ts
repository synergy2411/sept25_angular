import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  // formBuilder = inject(FormBuilder)
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        RegisterComponent.containExclamationMark,
      ]),
      hobbies: new FormArray([]),
    });
  }

  get username() {
    return this.registerForm.get('username') as FormControl;
  }

  get password() {
    return this.registerForm.get('password') as FormControl;
  }

  get hobbies() {
    return this.registerForm.get('hobbies') as FormArray;
  }

  newHobby() {
    return new FormGroup({
      name: new FormControl(),
      frequency: new FormControl(),
    });
  }

  onAddNewHobby() {
    this.hobbies.push(this.newHobby());
  }

  onSubmit() {
    // console.log('Username : ', this.registerForm.value.username);
    // console.log('Password : ', this.registerForm.value.password);
    console.log(this.registerForm.value);
  }

  // Custom Validator
  static containExclamationMark(
    control: AbstractControl
  ): null | ValidationErrors {
    const hasExclamationMark = control.value.indexOf('!') >= 0;
    return hasExclamationMark ? null : { exclamationError: true };
  }
}

// CHALLENGE : Create custom validator for confirm password field that should match the value with password field
