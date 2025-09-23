import { Component, OnInit } from '@angular/core';
import {
  interval,
  Subscription,
  from,
  of,
  fromEvent,
  Observable,
  map,
  filter,
  take,
  skip,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrl: './observable-demo.component.css',
})
export class ObservableDemoComponent implements OnInit {
  customObs$ = new Observable((observer) => {
    setTimeout(() => {
      observer.next('First Package');
    }, 1000);
    setTimeout(() => {
      observer.next('Second Package');
    }, 2000);
    setTimeout(() => {
      observer.next('Third Package');
    }, 4000);
    // observer.error(new Error('Something went wrong.'));
    setTimeout(() => {
      observer.complete();
    }, 5000);
  });

  onCustomObsSubscribe() {
    this.customObs$.subscribe({
      next: (data) => console.log('Data : ', data),
      error: (err) => console.error(err),
      complete: () => console.log('[COMPLETED]'),
    });
  }

  interval$ = interval(1000);
  unsub$!: Subscription;

  from$ = from(['Monica', 'Joey', 'Chandler', 'Ross', 'Rachel']);

  of$ = of(99, 97, 91, 89, 75);

  fromEvent$ = fromEvent(document.body, 'click');

  ngOnInit(): void {
    this.fromEvent$.subscribe(console.log);
  }

  onOfSubscribe() {
    this.of$.subscribe((mark) => console.log('Marks : ', mark));
  }

  onFromSubscribe() {
    this.from$.subscribe({
      next: (friend) => console.log('Friend Name : ', friend),
    });
  }

  onIntervalSubscribe() {
    this.unsub$ = this.interval$
      .pipe(
        tap((value) => console.log('[TAP]', value)),
        filter((value) => value % 2 === 0),
        map((value) => value ** 2),
        take(5),
        skip(2)
      )
      .subscribe({
        next: (data) => console.log(data),
        error: (err) => console.log(err),
        complete: () => console.log('[COMPLETED]'),
      });
  }

  onIntervalUnsubscribe() {
    this.unsub$.unsubscribe();
  }
}
