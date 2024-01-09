import { Injectable } from '@angular/core';
import {
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
// import { IniciarSesionService } from './servicios/iniciar-sesion.service';

@Injectable({
  providedIn: 'root',
})
export class VigilanteGuard {
  //Injection
  constructor(
    // private iniciarSesionService: IniciarSesionService,
    private router: Router
  ) {}

  canActivate(): boolean {
    // if (this.iniciarSesionService.verificarUser()) {
    //   return true;
    // }
    // this.router.navigate(['/land/home']);
    return false;
  }
}
