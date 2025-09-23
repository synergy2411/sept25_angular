import { Component } from '@angular/core';
import { UserBioService } from '../../../services/user-bio.service';

@Component({
  selector: 'app-user-bio',
  templateUrl: './user-bio.component.html',
  styleUrl: './user-bio.component.css',
})
export class UserBioComponent {
  gender!: string;
  age!: number;
  username: string = '';
  toggle = false;

  constructor(private bioService: UserBioService) {}

  onUserBio() {
    this.bioService.getUserGender(this.username).subscribe((userBio) => {
      this.gender = userBio.gender;
      this.toggle = true;
    });
  }
}
