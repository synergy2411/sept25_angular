import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
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
import { DataService } from './services/data.service';
import { CounterOneComponent } from './components/playground/counter/counter-one/counter-one.component';
import { CounterTwoComponent } from './components/playground/counter/counter-two/counter-two.component';
import { CounterService } from './services/counter.service';
import { ObservableDemoComponent } from './components/playground/observable-demo/observable-demo.component';
import { UserBioService } from './services/user-bio.service';
import { UserBioComponent } from './components/playground/user-bio/user-bio.component';
import { ExpensesComponent } from './components/expenses/expenses/expenses.component';
import { ExpenseItemComponent } from './components/expenses/expense-item/expense-item.component';
import { ExpenseFormComponent } from './components/expenses/expense-form/expense-form.component';

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
    CounterOneComponent,
    CounterTwoComponent,
    ObservableDemoComponent,
    UserBioComponent,
    ExpensesComponent,
    ExpenseItemComponent,
    ExpenseFormComponent,
  ],
  imports: [
    // Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CounterService], // Services Registration
  bootstrap: [AppComponent],
})
export class AppModule {}
