import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from '@swimlane/ngx-charts';
import { ToastrService } from 'ngx-toastr';
import { Subscription, catchError, map } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { showMessage } from 'src/app/utils/messages/toast.func';
import { observadorAny } from 'src/app/utils/observers/any-type';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  private tmp: any;
  public userModel: any = User;
  public id: string = '';
  public cargaFinalizada: boolean;
  public sub: Subscription;
  public oneName: string = ''; 
  constructor(
    public router: Router,
    public userService: UserService,
    public toastr: ToastrService,
    private activatedRoute: ActivatedRoute,

  ) {
    this.sub = this.tmp;
    this.cargaFinalizada = false;
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.userService.getUser(this.id).subscribe(
        (res) => {
          this.userModel = res;
          this.getOneName();
          this.cargaFinalizada = true;
        },
        (error) => console.log(error)
      );
    });

    if (this.sub) this.sub.unsubscribe();
  }

  private getOneName(): void {
    if (this.userModel?.user?.firstName && this.userModel.user.firstName.includes(' ')) {
      const nombres = this.userModel.user.firstName.split(' ');
      this.oneName = nombres[0];
    } else {
      this.oneName = this.userModel?.user?.firstName || '';
    }
  }

  single = [
    {
      name: 'Germany',
      value: 8940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
    {
      name: 'France',
      value: 7200000,
    },
    {
      name: 'UK',
      value: 6200000,
    },
  ];

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
