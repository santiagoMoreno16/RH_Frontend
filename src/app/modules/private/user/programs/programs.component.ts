import { Component, OnInit } from '@angular/core';
import { CourseModule } from 'src/app/models/course-module';
import { CourseModuleService } from 'src/app/services/course-module.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
})
export class ProgramsComponent implements OnInit {

  public courseModel: any = CourseModule;

  openModal() {
    this.dialogService.open();
  }
  constructor(private dialogService: DialogService, private courseModuleService: CourseModuleService) {}


  getCourseModules(){
    this.courseModuleService.getCourseModules().subscribe((data: any) => {
      this.courseModel = data;
      console.log("🚀 ~ ProgramsComponent ~ this.courseModuleService.getCourseModules ~ this.courseModel:", this.courseModel)
    });
  }

  ngOnInit() {
    this.getCourseModules();
  }
}
