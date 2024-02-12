import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { AccountComponent } from './account.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'overview',
        loadChildren: () =>
      import('./route-wrappers/account-overview-wrapper.module').then((m) => m.AccountOverviewWrapperModule)
      },
      {
        path: 'settings',
        loadChildren: () =>
      import('./route-wrappers/account-settings-wrapper.module').then((m) => m.AccountSettingsWrapperModule)
      },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: '**', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
