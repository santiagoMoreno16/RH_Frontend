import { Routes } from '@angular/router';

export const RUTAS_LANDSCAPE: Routes = [
    {
      path: 'land',
      loadChildren: () =>
        import('../../modules/public/public.module').then(
          (m) => m.PublicModule
        ),
    },
  
    { path: '', redirectTo: 'land', pathMatch: 'full' },
  ];
  