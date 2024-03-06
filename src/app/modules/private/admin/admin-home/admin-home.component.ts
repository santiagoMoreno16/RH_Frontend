import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription, finalize, map } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { observadorAny } from 'src/app/utils/observers/any-type';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit, OnDestroy {
  public userModel: any = User;
  public sub: any = Subscription;
  public id: string = '';
  public cargaFinalizada: boolean = false;
  public oneName: string = '';

  constructor(
    public router: Router,
    public userService: UserService,
    public toastr: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  private getUserData(id: string): void {
    this.sub = this.userService
      .getUser(id)
      .pipe(
        map((data) => {
          this.userModel = data;
          console.log( '🚀 ~ AdminHomeComponent ~ map ~ this.userModel:', this.userModel );
          this.getOneName();
          localStorage.setItem('user_id', this.userModel.user.id);
        }),
        finalize(() => {
          this.cargaFinalizada = true;
        })
      )
      .subscribe(observadorAny);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.getUserData(this.id);
    });
  }

  private getOneName(): void {
    if (
      this.userModel?.user?.firstName &&
      this.userModel.user.firstName.includes(' ')
    ) {
      const nombres = this.userModel.user.firstName.split(' ');
      this.oneName = nombres[0];
    } else {
      this.oneName = this.userModel?.user?.firstName || '';
    }
  }
}
