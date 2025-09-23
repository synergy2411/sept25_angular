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
  gender!: string;
  age!: number;
  username = new FormControl('');
  toggle = false;

  constructor(private bioService: UserBioService) {}

  ngOnInit(): void {
    this.username.valueChanges.pipe(debounceTime(2000)).subscribe((value) => {
      this.bioService
        .getUserGender(value)
        .subscribe((bio) => (this.gender = bio.gender));
    });
  }

  onUserBio() {
    // this.bioService.getUserGender(this.username.value?).subscribe((userBio) => {
    //   this.gender = userBio.gender;
    //   this.toggle = true;
    // });
  }
}
