import { Injectable } from '@angular/core';
import * as serverUrl from '../utils/domain/uris';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Points {
  name: string;
  value: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private data: Points[] = [
    {
      name: 'Puntos Estratégicos',
      value: 500,
    },
    {
      name: 'Puntos Tácticos',
      value: 1500,
    },
    {
      name: 'Puntos Operacionales',
      value: 2000,
    },
    {
      name: 'Puntos Personales',
      value: 1000,
    },
  ];

  public apiGetUser: string = serverUrl.API_GET_USER;

  constructor(private http: HttpClient) {}
  public getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiGetUser}/${id}`);
  }

  get points() {
    return this.data;
  }
}
