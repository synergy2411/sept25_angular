import { Injectable } from '@angular/core';
import { USER_DATA } from '../models/mocks';
import { IUser } from '../models/user-model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';

// Self Registration
// - 'Tree-shaking' (Webpack): Removing unused code from final build
// - Reduces final build of the app

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private firebaseURL =
    'https://ng-sept-25-default-rtdb.firebaseio.com/users.json';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserdata() {
    return this.http.get<Array<IUser>>(this.firebaseURL);

    // return this.http.get<Array<IUser>>(this.firebaseURL, {
    //   params: new HttpParams().set('auth', this.authService.getToken()),
    // });

    // return this.http.get<Array<IUser>>(
    //   `${this.firebaseURL}?auth=${this.authService.getToken()}`);
  }
}
