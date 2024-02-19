import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  { path: 'id', component: CourseComponent },

  { path: '**', redirectTo: 'course', pathMatch: 'full' },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)

  ]
})
export class CourseRoutingModule { }
