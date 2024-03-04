import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProgramsComponent } from './programs/programs.component';
import { DateFormatPipe } from 'src/app/utils/methods/customDate';
import { CustomDateFormatPipe } from 'src/app/utils/methods/customDatev2';



@NgModule({
  declarations: [UserDetailsComponent, ProgramsComponent, DateFormatPipe, CustomDateFormatPipe],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    RouterModule,
    NgxChartsModule,

    
  ]
})
export class UserModule { }
