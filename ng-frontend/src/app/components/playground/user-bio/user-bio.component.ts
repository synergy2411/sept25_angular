import { Component, OnInit } from '@angular/core';
import { UserBioService } from '../../../services/user-bio.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-user-bio',
  templateUrl: './user-bio.component.html',
  styleUrl: './user-bio.component.css',
})
export class UserBioComponent implements OnInit {
  gender: string = '';
  age!: number;
  username = new FormControl('');

  constructor(private bioService: UserBioService) {}

  ngOnInit(): void {
    this.username.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      if (value?.trim() != '') {
        this.bioService
          .getUserGender(value)
          .pipe(debounceTime(1000))
          .subscribe((bio) => {
            this.gender = bio.gender;
          });
      } else {
        this.gender = '';
      }
    });
  }

  onUserBio() {
    // this.bioService.getUserGender(this.username.value?).subscribe((userBio) => {
    //   this.gender = userBio.gender;
    //   this.toggle = true;
    // });
  }
}
