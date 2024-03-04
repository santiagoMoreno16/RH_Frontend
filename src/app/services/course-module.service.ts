import { Injectable } from '@angular/core';
import * as serverUrl from '../utils/domain/uris';
import { Observable } from 'rxjs';
import { CourseModule } from '../models/course-module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseModuleService {

  public apiGetCourses: string = serverUrl.API_GET_MODULES;
  constructor(private http: HttpClient) { }

  public getCourseModules(): Observable<CourseModule> {
    return this.http.get<CourseModule>(`${this.apiGetCourses}/`);
  }
}
