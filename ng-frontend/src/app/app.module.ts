import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // Components, Directives, Pipes
    AppComponent,
    UsersComponent,
  ],
  imports: [
    // Modules
    BrowserModule,
    FormsModule,
  ],
  providers: [], // Services Registration
  bootstrap: [AppComponent],
})
export class AppModule {}
