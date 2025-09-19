import { IComment } from './comment-model';

export interface IUser {
  firstName: string;
  lastName: string;
  dob: Date;
  company: string;
  isWorking: boolean;
  votes: number;
  avatar: string;
  comments: Array<IComment>;
}
