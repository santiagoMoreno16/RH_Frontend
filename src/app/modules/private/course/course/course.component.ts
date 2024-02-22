import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
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


  constructor() {}

  ngOnInit() {}
}
