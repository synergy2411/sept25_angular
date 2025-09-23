import { Component, inject } from '@angular/core';
import { CounterService } from '../../../../services/counter.service';

@Component({
  selector: 'app-counter-two',
  templateUrl: './counter-two.component.html',
  styleUrl: './counter-two.component.css',
  providers: [CounterService],
})
export class CounterTwoComponent {
  public counterService = inject(CounterService);
}
