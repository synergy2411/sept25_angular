import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrl: './observable-demo.component.css',
})
export class ObservableDemoComponent {
  interval$ = interval(1000);
  unsub$!: Subscription;

  onIntervalSubscribe() {
    this.unsub$ = this.interval$.subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.log('[COMPLETED]'),
    });
  }

  onIntervalUnsubscribe() {
    this.unsub$.unsubscribe();
  }
}
