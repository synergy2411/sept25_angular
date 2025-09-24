import { Injectable } from '@angular/core';
import { USER_DATA } from '../models/mocks';
import { IUser } from '../models/user-model';
import { HttpClient } from '@angular/common/http';

// Self Registration
// - 'Tree-shaking' (Webpack): Removing unused code from final build
// - Reduces final build of the app

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private fribaseURL =
    'https://ng-sept-25-default-rtdb.firebaseio.com/users.json';

  constructor(private http: HttpClient) {}

  getUserdata() {
    return this.http.get<Array<IUser>>(this.fribaseURL);
  }
}
