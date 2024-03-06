import { Injectable } from '@angular/core';
import * as serverUrl from '../utils/domain/uris';
import { Observable } from 'rxjs';
import { CourseModule } from '../models/course-module';
import { HttpClient } from '@angular/common/http';
import { UserCourseEntity } from '../models/user-course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseModuleService {

  public apiGetCourses: string = serverUrl.API_GET_MODULES;
  public apiSetCourses: string = serverUrl.API_SET_MODULES;
  public apiGetCourseById: string = serverUrl.API_GET_MODULES;
  constructor(private http: HttpClient) { }

  public getCourseModules(): Observable<CourseModule> {
    return this.http.get<CourseModule>(`${this.apiGetCourses}/`);
  }

  public registerCourse(obj: UserCourseEntity): Observable<UserCourseEntity> {
    return this.http.post<UserCourseEntity>(this.apiSetCourses, obj)
  }

  public getCourseById(id: string): Observable<CourseModule> {
    return this.http.get<CourseModule>(`${this.apiGetCourseById}/${id}`)
  }

}
