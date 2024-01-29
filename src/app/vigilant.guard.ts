import { Injectable } from '@angular/core';
import {
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from './services/session.service';
// import { IniciarSesionService } from './servicios/iniciar-sesion.service';

@Injectable({
  providedIn: 'root',
})
export class VigilanteGuard {
  //Injection
  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.sessionService.verifyUser()) {
      return true;
    }
    this.router.navigate(['/land/home']);
    return false;
  }
}
