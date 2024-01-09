import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ContainerModule } from '../container/container.module';
import { BenefitsComponent } from './benefits/benefits.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BenefitsComponent,
    ErrorComponent,
    WelcomeComponent,
    BlogComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RouterModule,
    
    ToastrModule.forRoot(),
    FormsModule,
    ContainerModule
  ]
})
export class PublicModule { }
