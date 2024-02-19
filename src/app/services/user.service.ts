import { Injectable } from '@angular/core';
import * as serverUrl from '../utils/domain/uris';
import { Observable, map } from 'rxjs';
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
  private data: Points[] = []

  public apiGetUser: string = serverUrl.API_GET_USER;
  public apiGetUserPoints: string = serverUrl.API_GET_USER_POINTS;

  constructor(private http: HttpClient) {}
  public getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiGetUser}/${id}`);
  }

  public getUserPoints(id: string): Observable<Points[]> {
    return this.http.get<any[]>(`${this.apiGetUserPoints}/${id}`).pipe(
      map((data: any) => {
        if (data && data.points) {
          return data.points.map((point: any) => {
            return {
              name: point.name,
              value: point.value,
            };
          });
        } else {
          return [];
        }
      })
    );
  }

}
