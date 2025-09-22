import { Injectable } from '@angular/core';
import { USER_DATA } from '../models/mocks';
import { IUser } from '../models/user-model';

// Self Registration
// - 'Tree-shaking' (Webpack): Removing unused code from final build
// - Reduces final build of the app

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getUserdata(): Array<IUser> {
    return USER_DATA;
  }
}
