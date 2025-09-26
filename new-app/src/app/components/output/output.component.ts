import { Component, signal, computed } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [ChildComponent, CommonModule], // Other Modules or Other Standalone Components
  templateUrl: './output.component.html',
  styleUrl: './output.component.css',
})
export class OutputComponent {
  friends = ['Monica', 'Ross', 'Joey', 'Rachel'];

  counter = signal(0);

  square = computed(() => this.counter() ** 2);

  onIncrease() {
    // this.counter += 1      // ERROR
    this.counter.update((counter) => counter + 1);
  }
}
