import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { LifeCycleComponent } from './components/playground/life-cycle/life-cycle.component';
import { CommentsComponent } from './components/users/comments/comments.component';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { PipeDemoComponent } from './components/playground/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CommentFormComponent } from './components/users/comment-form/comment-form.component';
import { RegisterComponent } from './components/auth/register/register.component';

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
    PipeDemoComponent,
    CountryCodePipe,
    ReversePipe,
    FilterPipe,
    CommentFormComponent,
    RegisterComponent,
  ],
  imports: [
    // Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [], // Services Registration
  bootstrap: [AppComponent],
})
export class AppModule {}
