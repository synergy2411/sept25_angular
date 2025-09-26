import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getName() {
    return 'Rachel Greens';
  }

  getPromiseData(): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('Ross Geller');
    });
  }

  getObservableData(): Observable<string> {
    return of('Chandler Bing');
  }
}
