import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css',
})
export class PipeDemoComponent {
  futureValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('the future value arrived in your app'), 2000);
  });

  contactNumber = 9876543210;

  filteredStatus = '';

  todoCollection = [
    { label: 'buy the grocery', status: 'pending' },
    { label: 'renew car insurance', status: 'completed' },
    { label: 'pot the plants', status: 'pending' },
    { label: 'clean the carpet', status: 'pending' },
  ];

  onAddItem() {
    // this.todoCollection.push({ label: 'New Todo Item', status: 'pending' });

    this.todoCollection = [
      ...this.todoCollection,
      { label: 'New Todo Item', status: 'pending' },
    ];

    console.log('Collection Lenght : ', this.todoCollection.length);
  }
}
