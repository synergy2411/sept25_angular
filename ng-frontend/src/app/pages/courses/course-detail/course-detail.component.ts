import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../../models/course-model';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent implements OnInit {
  course!: ICourse;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // console.log(
    //   'Selected Course Id : ',
    //   this.route.snapshot.params['courseId']
    // );

    // Course Data from Resolver (pre-fetching the data before component loads on UI)
    this.course = this.route.snapshot.data['courseData'];

    // this.route.params.subscribe((params) => {
    //   // console.log('Subscribed Params : ', params['courseId']);
    //   this.courseService
    //     .getCourse(params['courseId'])
    //     .subscribe((theCourse) => (this.course = theCourse));
    // });
  }

  onSeeAllCourses() {
    this.router.navigateByUrl('/courses');
  }

  onDelete(courseId: string) {
    this.courseService.deleteCourse(courseId).subscribe(() => {
      this.router.navigateByUrl('/courses?onDelete=true');
    });
  }
}
