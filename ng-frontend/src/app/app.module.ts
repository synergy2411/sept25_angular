import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { FormsModule } from '@angular/forms';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { LifeCycleComponent } from './components/playground/life-cycle/life-cycle.component';
import { CommentsComponent } from './components/users/comments/comments.component';
import { BetterHighlightDirective } from './directives/better-highlight.directive';

@NgModule({
  declarations: [
    // Components, Directives, Pipes
    AppComponent,
    UsersComponent,
    UserImgComponent,
    UserInfoComponent,
    ButtonComponent,
    LifeCycleComponent,
    CommentsComponent,
    BetterHighlightDirective,
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
