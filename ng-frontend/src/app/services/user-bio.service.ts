import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserBioService {
  private genderURL = 'https://api.genderize.io';
  private ageURL = 'https://api.agify.io';

  constructor(private http: HttpClient) {}

  getUserGender(username: string): Observable<{ gender: string }> {
    return this.http.get<{ gender: string }>(
      `${this.genderURL}?name=${username}`
    );
  }

  getUserAge(username: string): Observable<{ age: number }> {
    return this.http.get<{ age: number }>(`${this.ageURL}?name=${username}`);
  }
}
