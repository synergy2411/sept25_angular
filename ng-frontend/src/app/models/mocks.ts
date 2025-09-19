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
    comments: [
      { stars: 4, body: 'Like the work', author: 'monica@test' },
      { stars: 5, body: '😻 Love your work', author: 'chandler@test' },
      { stars: 3, body: 'Just great', author: 'ross@test' },
    ],
  },
  {
    firstName: 'steve',
    lastName: 'jobs',
    dob: new Date('jan 3, 1968'),
    company: 'Apple',
    isWorking: false,
    votes: 180,
    avatar: './assets/images/steve.jpeg',
    comments: [
      { stars: 5, body: 'Great initiatives', author: 'joey@test' },
      { stars: 4, body: '👍 Well done', author: 'rachel@test' },
    ],
  },
  {
    firstName: 'tim b.',
    lastName: 'lee',
    dob: new Date('Aug 2, 1972'),
    company: 'World Wide Web',
    isWorking: true,
    votes: 110,
    avatar: './assets/images/tim.jpeg',
    comments: [],
  },
];
