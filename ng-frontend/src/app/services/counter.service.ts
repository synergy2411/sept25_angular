import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn : "root"
// })

@Injectable()
export class CounterService {
  private counter = 0;

  constructor() {}

  getCounter() {
    return this.counter;
  }

  increaseCounter() {
    this.counter += 1;
  }

  decreaseCounter() {
    this.counter -= 1;
  }
}
