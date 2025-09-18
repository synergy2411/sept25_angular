import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../../models/user-model';
import { USER_DATA } from '../../models/mocks';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  user!: IUser;

  ngOnInit(): void {
    this.user = USER_DATA;
  }

  constructor() {}

  onMoreInfo(user: IUser) {
    alert(`Mr. ${user.lastName} works with ${user.company}!!`);
  }
}
