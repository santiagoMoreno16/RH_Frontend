import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InternalHomeComponent } from './internal-home/internal-home.component';
import { InternalErrorComponent } from './internal-error/internal-error.component';

const routes: Routes = [
  { path: 'board', component: InternalHomeComponent },

  { path: '', redirectTo: 'board', pathMatch: 'full' },
  { path: '**', component: InternalErrorComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ControlRoutingModule { }
