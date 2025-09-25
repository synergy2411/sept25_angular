import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../models/course-model';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.css',
})
export class CoursesPageComponent implements OnInit {
  allCourses!: Array<ICourse>;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((query: any) => {
      if (query.onDelete) {
        this.fetchCourses();
      }
    });

    this.fetchCourses();
  }

  private fetchCourses() {
    this.courseService
      .getCourses()
      .subscribe((courses) => (this.allCourses = courses));
  }

  onCourseSelect(courseId: string) {
    this.router.navigateByUrl(`/courses/${courseId}`);
  }
}
