import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-frontend';
  toggle = false;

  constructor(public authService: AuthService) {}

  onWarning() {
    alert('Dont enter here!');
  }

  onSuccess() {
    alert(`You arrived at right place.`);
  }
}
