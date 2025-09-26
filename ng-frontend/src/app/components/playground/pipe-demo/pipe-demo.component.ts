import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css',
})
export class PipeDemoComponent {
  constructor(private cdRef: ChangeDetectorRef) {}

  stopDetection() {
    this.cdRef.detach();
    // Code written here will not affect angular digest cycle
    // - Third Party Widget
    this.cdRef.reattach();
  }

  futureValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('the future value arrived in your app'), 2000);
  });

  contactNumber = 9876543210;

  filteredStatus = '';

  todoCollection = [
    { id: 't001', label: 'buy the grocery', status: 'pending' },
    { id: 't002', label: 'renew car insurance', status: 'completed' },
    { id: 't003', label: 'pot the plants', status: 'pending' },
    { id: 't004', label: 'clean the carpet', status: 'pending' },
  ];

  onAddItem() {
    // this.todoCollection.push({ label: 'New Todo Item', status: 'pending' });

    this.todoCollection = [
      ...this.todoCollection,
      {
        id: 't00' + this.todoCollection.length + 1,
        label: 'New Todo Item',
        status: 'pending',
      },
    ];

    console.log('Collection Lenght : ', this.todoCollection.length);
  }

  trackById(todo: { id: string; label: string; status: string }) {
    return todo.id;
  }
}
