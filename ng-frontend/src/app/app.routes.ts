import { Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { ExpensesComponent } from './components/expenses/expenses/expenses.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { RouteGuardService } from './services/guards/route-guard.service';

export const APP_ROUTES: Routes = [
  {
    path: '', // http://localhost:4200/
    redirectTo: '/auth',
    pathMatch: 'full',
  },
  {
    path: 'auth', // http://localhost:4200/auth
    component: RegisterComponent,
  },
  {
    path: 'users', // http://localhost:4200/users
    component: UsersComponent,
    canActivate: [AuthGuardService],
    canDeactivate: [RouteGuardService],
  },
  {
    path: 'expenses', // http://localhost:4200/expenses
    component: ExpensesComponent,
  },
  {
    path: '**', // URL Path does not match with the configuration
    component: PageNotFoundComponent,
  },
];
