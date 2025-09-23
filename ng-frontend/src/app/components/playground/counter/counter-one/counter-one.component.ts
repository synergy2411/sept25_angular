import { Component } from '@angular/core';
import { CounterService } from '../../../../services/counter.service';

@Component({
  selector: 'app-counter-one',
  templateUrl: './counter-one.component.html',
  styleUrl: './counter-one.component.css',
})
export class CounterOneComponent {
  constructor(public counterService: CounterService) {}
}
