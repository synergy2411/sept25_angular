import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../../models/user-model';
import { DataService } from '../../services/data.service';
// import { USER_DATA } from '../../models/mocks';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users!: Array<IUser>;
  tab = 0;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.users = this.dataService.getUserdata();
  }

  onMoreInfo(user: IUser) {
    alert(`Mr. ${user.lastName} works with ${user.company}!!`);
  }
}
