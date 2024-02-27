import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProgramsComponent } from './programs/programs.component';
import { DateFormatPipe } from 'src/app/utils/methods/customDate';



@NgModule({
  declarations: [UserDetailsComponent, ProgramsComponent, DateFormatPipe],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    RouterModule,
    NgxChartsModule,

    
  ]
})
export class UserModule { }
