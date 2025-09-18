import { Component } from '@angular/core';
import { IUser } from '../../models/user-model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  user: IUser = {
    firstName: 'Bill',
    lastName: 'Gates',
    dob: new Date('Dec 12, 1975'),
    company: 'Microsoft',
    isWorking: true,
    votes: 120,
    avatar: './assets/images/bill.jpeg',
  };

  onMoreInfo(user: IUser) {
    alert(`Mr. ${user.lastName} works with ${user.company}!!`);
  }
}
