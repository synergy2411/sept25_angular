import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    // Components, Directives, Pipes
    AppComponent,
    UsersComponent,
  ],
  imports: [
    // Modules
    BrowserModule,
  ],
  providers: [], // Services Registration
  bootstrap: [AppComponent],
})
export class AppModule {}
