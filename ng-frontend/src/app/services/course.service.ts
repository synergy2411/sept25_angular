import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourse } from '../models/course-model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courseURL = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get<Array<ICourse>>(this.courseURL);
  }

  getCourse(courseId: string) {
    return this.http.get<ICourse>(`${this.courseURL}/${courseId}`);
  }

  deleteCourse(courseId: string) {
    return this.http.delete(`${this.courseURL}/${courseId}`);
  }
}
