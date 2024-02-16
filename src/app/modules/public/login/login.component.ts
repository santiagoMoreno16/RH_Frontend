import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription, catchError, map } from 'rxjs';
import { ResponseSessionModel } from 'src/app/models/response-session.model';
import { SessionModel } from 'src/app/models/session.model';
import { SessionService } from 'src/app/services/session.service';
import { showMessage } from 'src/app/utils/messages/toast.func';
import { observadorAny } from 'src/app/utils/observers/any-type';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private tmp: any;
  public objUser: SessionModel;
  public mySubcription: Subscription;
  public emailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  public selectedOption: string = '';
  public showLoginForm: boolean = false;

  private username: string = '';
  private password: string = '';

  constructor(
    private router: Router,
    public sessionService: SessionService,
    public toastr: ToastrService
  ) {
    this.objUser = new SessionModel('', '', '');
    this.mySubcription = this.tmp;
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.mySubcription) {
      this.mySubcription.unsubscribe();
    }
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.showLoginForm = true;
  }

  public operations(formulario: NgForm): void {
    const pass = this.objUser.password
    const email: any = this.objUser.email;
    const objSession = new SessionModel(email, pass, this.selectedOption);
    

    this.mySubcription = this.sessionService
      .iniciarSesion(objSession)
      .pipe(
        map((result: ResponseSessionModel) => {
          localStorage.setItem('token', result.token);
          const id  = result.user.id
          this.router.navigate(['/private/user/details/'+ id]);
          showMessage(
            'success',
            'Bienvenido al sistema',
            'Correcto',
            this.toastr
          );
          formulario.reset();
          return result;
        }),
        catchError((err) => {
          showMessage(
            'error',
            'Autenticación incorrecta',
            'Error',
            this.toastr
          );
          formulario.reset();
          throw err;
        })
      )
      .subscribe(observadorAny);
  }


  cancel() {
    this.resetState();
  }

  resetState() {
    this.showLoginForm = false;
    this.selectedOption = '';
    this.username = '';
    this.password = '';
  }
}
