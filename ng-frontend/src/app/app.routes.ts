import { Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { ExpensesComponent } from './components/expenses/expenses/expenses.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { RouteGuardService } from './services/guards/route-guard.service';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CourseDetailComponent } from './pages/courses/course-detail/course-detail.component';
import { RootLayoutComponent } from './pages/root-layout/root-layout.component';
import { CourseResolverService } from './services/guards/course-resolver.service';
import { IAmLazyModule } from './modules/i-am-lazy/i-am-lazy.module';

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
    path: 'courses', // http://localhost:4200/courses
    component: CoursesPageComponent,
    children: [
      {
        path: ':courseId', // http://localhost:4200/courses/c001 // Route Parameter
        component: CourseDetailComponent,
        resolve: { courseData: CourseResolverService },
      },
    ],
  },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./modules/i-am-lazy/i-am-lazy.module').then(
        (m) => m.IAmLazyModule
      ),
  },
  {
    path: '**', // URL Path does not match with the configuration
    component: PageNotFoundComponent,
  },
];
