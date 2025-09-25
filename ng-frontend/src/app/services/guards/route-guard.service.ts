import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';
import { UsersComponent } from '../../components/users/users.component';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService implements CanDeactivate<UsersComponent> {
  constructor() {}

  canDeactivate(
    component: UsersComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    return component.shouldExit();
  }
}
