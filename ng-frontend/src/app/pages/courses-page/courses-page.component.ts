import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../models/course-model';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.css',
})
export class CoursesPageComponent implements OnInit {
  allCourses!: Array<ICourse>;

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.courseService
      .getCourses()
      .subscribe((courses) => (this.allCourses = courses));
  }

  onCourseSelect(courseId: string) {
    this.router.navigateByUrl(`/courses/${courseId}`);
  }
}
