import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProgramsComponent } from './programs/programs.component';

const routes: Routes = [
  { path: 'details/:id', component: UserDetailsComponent },
  { path: 'programs', component: ProgramsComponent },

  { path: '**', redirectTo: 'details', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class UserRoutingModule { }
