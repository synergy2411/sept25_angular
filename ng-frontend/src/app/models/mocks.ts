import { IUser } from './user-model';

export const USER_DATA: Array<IUser> = [
  {
    firstName: 'Bill',
    lastName: 'Gates',
    dob: new Date('Dec 12, 1975'),
    company: 'Microsoft',
    isWorking: true,
    votes: 120,
    avatar: './assets/images/bill.jpeg',
  },
  {
    firstName: 'steve',
    lastName: 'jobs',
    dob: new Date('jan 3, 1968'),
    company: 'Apple',
    isWorking: false,
    votes: 180,
    avatar: './assets/images/steve.jpeg',
  },
  {
    firstName: 'tim b.',
    lastName: 'lee',
    dob: new Date('Aug 2, 1972'),
    company: 'World Wide Web',
    isWorking: true,
    votes: 110,
    avatar: './assets/images/tim.jpeg',
  },
];
