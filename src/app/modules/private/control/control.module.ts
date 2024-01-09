import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlRoutingModule } from './control-routing.module';
import { InternalErrorComponent } from './internal-error/internal-error.component';
import { InternalHomeComponent } from './internal-home/internal-home.component';



@NgModule({
  declarations: [InternalErrorComponent, InternalHomeComponent],
  imports: [
    CommonModule,
    ControlRoutingModule
  ]
})
export class ControlModule { }
