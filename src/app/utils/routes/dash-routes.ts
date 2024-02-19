import { UserModule } from './../../modules/private/user/user.module';
import { UserDetailsComponent } from './../../modules/private/user/user-details/user-details.component';
import { InternalErrorComponent } from 'src/app/modules/private/control/internal-error/internal-error.component';
import { ControlModule } from './../../modules/private/control/control.module';
import { Routes } from '@angular/router';

export const RUTAS_DASHBOARD: Routes = [
    {
      path: 'dash',
      loadChildren: () =>
        import('../../modules/private/control/control.module').then(
          (m) => m.ControlModule
        ),
    },

    // User Routing
  {
    path: 'user',
    loadChildren: () =>
      import('../../modules/private/user/user.module').then((m) => m.UserModule),
  },

    // Course Routing
    {
      path: 'course',
      loadChildren: () =>
        import('../../modules/private/course/course.module').then((m) => m.CourseModule),
    },
  
    { path: '', redirectTo: 'dash', pathMatch: 'full' },
    { path: '**', component: InternalErrorComponent },
  ];
  