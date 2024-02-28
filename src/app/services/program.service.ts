import { Injectable } from '@angular/core';
import * as serverUrl from '../utils/domain/uris';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonalProgram } from '../models/personalPrograms';


@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  public apiGetUserPrograms: string = serverUrl.API_GET_USER_PROGRAMS;
  constructor(private http: HttpClient) { }

  public getPersonalPrograms(id: string): Observable<PersonalProgram> {
    return this.http.get<PersonalProgram>(`${this.apiGetUserPrograms}/${id}`);
  }


}
