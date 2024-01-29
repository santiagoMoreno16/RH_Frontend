import { Injectable } from '@angular/core';
import * as miUrl from '../utils/domain/uris';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import jwtDecode from 'jwt-decode';
import { ResponseSessionModel } from '../models/response-session.model';
import { MySession } from '../models/my-session';
import { SessionModel } from '../models/session.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public apiSession: string = miUrl.API_LOGIN + '/login';
  public apiRegister: string = miUrl.API_REGISTER + '/register';
  public objSession: MySession;

  constructor(private http: HttpClient, private router: Router) {
    this.objSession = this.iniciarlizarMiSesion();
  }

  private iniciarlizarMiSesion(): MySession {
    return new MySession('', '');
  }

  public iniciarSesion( objAccess: SessionModel ): Observable<ResponseSessionModel> {
    return this.http.post<ResponseSessionModel>( this.apiSession, objAccess );
  }

  // public registarUsuario( objAccess: RegistrarUsuario ): Observable<RespuestaInicioSesion> {
  //   return this.http.post<RespuestaInicioSesion>( this.apiRegister, objAccess );
  // }


  public salir(): void {
    localStorage.removeItem('token');
    this.router.navigate(['land/home']);
  }

  
  public obtenerDatosSesion(): MySession {
    return this.objSession;
  }


  public verifyUser(): boolean {
    if (localStorage.getItem('token')) {
      try {
        const token: any = localStorage.getItem('token');
        const objTmp: any = jwtDecode(token);
        
        this.objSession.id = objTmp.id;
        this.objSession.email = objTmp.email;

        return true;
      } catch (error) {
        console.log(error);
      }
    }
    return false;
  }

}
