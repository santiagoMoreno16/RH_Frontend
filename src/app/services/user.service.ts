import { Injectable } from '@angular/core';
import * as serverUrl from '../utils/domain/uris';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public apiGetUser: string = serverUrl.API_GET_USER;

  constructor(private http: HttpClient) {}
  public getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiGetUser}/${id}`);
  }
}
