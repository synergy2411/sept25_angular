import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-frontend';
  toggle = false;

  onWarning() {
    alert('Dont enter here!');
  }

  onSuccess() {
    alert(`You arrived at right place.`);
  }
}
