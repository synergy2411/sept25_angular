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
}
