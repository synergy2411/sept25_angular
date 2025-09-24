import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseApp: FirebaseApp;
  auth: Auth;
  private token: string = '';

  constructor() {
    this.firebaseApp = initializeApp({
      apiKey: 'AIzaSyCClHdnaLcxdP5VL3ZPTaX5GjC_j0jkT1w',
      authDomain: 'ng-sept-25.firebaseapp.com',
    });
    this.auth = getAuth(this.firebaseApp);
  }

  async createUser(email: string, password: string) {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      console.log('User is created.', userCredentials);
    } catch (err) {
      console.error(err);
    }
  }

  async userLogin(email: string, password: string) {
    try {
      const userCreds = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      this.token = await userCreds.user.getIdToken();
    } catch (err) {
      console.error(err);
    }
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token.trim() != '';
  }
}
