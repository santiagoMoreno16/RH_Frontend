import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './modules/public/error/error.component';
import { ContainerLandComponent } from './modules/container/land/container-land/container-land.component';
import { RUTAS_LANDSCAPE } from './utils/routes/land-routes';
import { ContainerDashComponent } from './modules/container/dash/container-dash/container-dash.component';
import { RUTAS_DASHBOARD } from './utils/routes/dash-routes';
import { VigilanteGuard } from './vigilant.guard';

const routes: Routes = [
  {path: '', component: ContainerLandComponent, children: RUTAS_LANDSCAPE},
  { path: 'private', component: ContainerDashComponent, children: RUTAS_DASHBOARD, canActivate: [VigilanteGuard]},

  {path: '**', component: ErrorComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
