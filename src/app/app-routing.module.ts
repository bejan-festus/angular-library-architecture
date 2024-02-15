import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../projects/tango-auth/src/public-api';

export const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('./modules/auth/auth.module').then((m) => m.AuthModule),
  // },
  {
    path: 'auth',
    loadChildren: () =>
      import('../../projects/tango-auth/src/public-api').then((m) => m.TangoAuthModule),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('../../node_modules/tango-app-shared').then((m) => m.ErrorsModule),
  },
  // {
  //   path: '',
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./_metronic/layout/layout.module').then((m) => m.LayoutModule),
  // },
  // {
  //   path: '',
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('../../node_modules/tango-app-shared').then((m) => m.LayoutModule),
  // },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('../../projects/tango-app-shared/src/public-api').then((m) => m.LayoutModule),
  },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
