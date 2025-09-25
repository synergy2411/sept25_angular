import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { ICourse } from '../../models/course-model';
import { CourseService } from '../course.service';

@Injectable({
  providedIn: 'root',
})
export class CourseResolverService implements Resolve<ICourse> {
  constructor(private courseService: CourseService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<ICourse> {
    return this.courseService.getCourse(route.params['courseId']);
  }
}
