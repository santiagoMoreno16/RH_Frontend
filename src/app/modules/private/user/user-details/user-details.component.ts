import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { PersonalProgram } from 'src/app/models/personalPrograms';
import { User } from 'src/app/models/user';
import { DialogService } from 'src/app/services/dialog.service';
import { ProgramService } from 'src/app/services/program.service';
import { UserService } from 'src/app/services/user.service';


export interface Points {
  name: string;
  value: number;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserDetailsComponent implements OnInit {
  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme: Color = {
    domain: ['#0EA2A4', '#FABE16', '#E5470E', '#F4650F'],
    name: 'colorScheme',
    selectable: false,
    group: ScaleType.Linear,
  };

  private tmp: any;
  public email: any;
  public userModel: any = User;
  public programModel: any = PersonalProgram;
  public id: string = '';
  public cargaFinalizada: boolean;
  public sub: Subscription;
  public oneName: string = '';
  public data: Points[] = [];
  public totalPoints: number = 0;
  
  constructor(
    public router: Router,
    public userService: UserService,
    public toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private dialogService: DialogService,
    private programService: ProgramService
  ) {
    this.sub = this.tmp;
    this.cargaFinalizada = false;
  }

 get single() {
    return this.data
  }

  getPoints(id: string){
    this.userService.getUserPoints(id).subscribe((points) => {
      this.data = points;
      this.calculateTotalPoints(); 
    });
  }

  getPersonalPrograms(id: string){
    this.programService.getPersonalPrograms(id).subscribe((data: any) => {
      this.programModel = data.program;
    });
  }
  

  private getUserData(id: string): void {
    this.userService.getUser(id).subscribe(
      (res) => {
        this.userModel = res;
        this.getOneName();
        this.cargaFinalizada = true;
        this.getPoints(this.userModel.user.id);
        this.getPersonalPrograms(this.userModel.user.id)
      },
      (error) => {
        console.error("Error al obtener el usuario:", error);
      }
    );
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.getUserData(this.id);
    });
    if (this.sub) this.sub.unsubscribe();
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

  private calculateTotalPoints(): void {
    this.totalPoints = this.data.reduce((total, point) => total + point.value, 0);
  }

  openDialog(id: string){
    this.dialogService.redeem()
  }

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
