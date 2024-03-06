import { CourseModuleService } from 'src/app/services/course-module.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseModule } from 'src/app/models/course-module';
import { Subscription } from 'rxjs';
import { observadorAny } from 'src/app/utils/observers/any-type';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  public id: string = '';
  public course: any = CourseModule;
  public sub: any = Subscription;

  courseBook: Boolean = true;
  whoTeach: Boolean = false;
  syllabus: Boolean = false;
  courseTest: Boolean = false;
  conceptAssessment: Boolean = false;
  courseValoration: Boolean = false;
  courseEvaluation: Boolean = false;

  openContent(content: string) {
    this.courseBook = content === 'courseBook';
    this.whoTeach = content === 'whoTeach';
    this.syllabus = content === 'syllabus';
    this.courseTest = content === 'courseTest';
    this.conceptAssessment = content === 'conceptAssessment';
    this.courseValoration = content === 'courseValoration';
    this.courseEvaluation = content === 'courseEvaluation';
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseModuleService: CourseModuleService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.getCourseData(this.id);
    });
  }

  getCourseData(id: string) {
    this.sub = this.courseModuleService.getCourseById(id).subscribe((data: any) => {
      this.course = data.course;
    });
  }
}
