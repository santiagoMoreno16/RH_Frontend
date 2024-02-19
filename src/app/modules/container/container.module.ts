import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderLandComponent } from './land/header-land/header-land.component';
import { ContainerLandComponent } from './land/container-land/container-land.component';
import { ContainerDashComponent } from './dash/container-dash/container-dash.component';
import { HeaderDashComponent } from './dash/header-dash/header-dash.component';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    HeaderLandComponent,
    ContainerLandComponent,
    ContainerDashComponent,
    HeaderDashComponent,
  ],
  imports: [CommonModule, RouterModule, CommonModule,
    FormsModule,
    NgxChartsModule],
  exports: [HeaderLandComponent, ContainerLandComponent],
})
export class ContainerModule {}
