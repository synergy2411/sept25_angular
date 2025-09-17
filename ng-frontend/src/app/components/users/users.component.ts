import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  user = {
    firstName: 'Bill',
    lastName: 'Gates',
    dob: new Date('Dec 12, 1975'),
    company: 'Microsoft',
    isWorking: true,
    votes: 120,
    avatar: './assets/images/bill.jpeg',
  };

  onMoreInfo(lastName: string, company: string) {
    alert(`Mr. ${lastName} works with ${company}!!`);
  }
}
