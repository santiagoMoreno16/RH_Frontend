import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription, catchError, map } from 'rxjs';
import { CourseModule } from 'src/app/models/course-module';
import { UserCourseEntity } from 'src/app/models/user-course.model';
import { CourseModuleService } from 'src/app/services/course-module.service';
import { DialogService } from 'src/app/services/dialog.service';
import { UserService } from 'src/app/services/user.service';
import { showMessage } from 'src/app/utils/messages/toast.func';
import { observadorAny } from 'src/app/utils/observers/any-type';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
})
export class ProgramsComponent implements OnInit {
  public courseModel: any = CourseModule;
  public userId: string = '';
  public sub: Subscription;
  private tmp: any;

  constructor(
    private dialogService: DialogService,
    private courseModuleService: CourseModuleService,
    private userService: UserService,
    public toastr: ToastrService
  ) {
    this.sub = this.tmp;
    this.userService.id$.subscribe((id) => {
      this.userId = id;
    });
  }
  openModal(id: string, obj: any) {
    const user_id = localStorage.getItem('user_id');
    if (user_id) {
      const course = new UserCourseEntity(user_id, {course_id: id, completed: false});
      this.sub = this.courseModuleService
        .registerCourse(course)
        .pipe(
          map((res) => {
            this.dialogService.open(obj);
          }),
          catchError((err) => {
            
            showMessage(
              'info',
              err.error.error,
              'Información',
              this.toastr
            );
            throw err;
          })
        )
        .subscribe(observadorAny);
    }
  }

  getCourseModules() {
    this.courseModuleService.getCourseModules().subscribe((data: any) => {
      this.courseModel = data;
    });
  }

  ngOnInit() {
    this.getCourseModules();
  }
}
