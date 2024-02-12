import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileDetailsComponent } from './components/settings/forms/profile-details/profile-details.component';
import { ConnectedAccountsComponent } from './components/settings/forms/connected-accounts/connected-accounts.component';
import { DeactivateAccountComponent } from './components/settings/forms/deactivate-account/deactivate-account.component';
import { EmailPreferencesComponent } from './components/settings/forms/email-preferences/email-preferences.component';
import { NotificationsComponent } from './components/settings/forms/notifications/notifications.component';
import { SignInMethodComponent } from './components/settings/forms/sign-in-method/sign-in-method.component';
// import { DropdownMenusModule, WidgetsModule } from '../../_metronic/partials';
// import {SharedModule} from "../../_metronic/shared/shared.module";

@NgModule({
  declarations: [
    AccountComponent,
    OverviewComponent,
    SettingsComponent,
    ProfileDetailsComponent,
    ConnectedAccountsComponent,
    DeactivateAccountComponent,
    EmailPreferencesComponent,
    NotificationsComponent,
    SignInMethodComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    // DropdownMenusModule,
    // WidgetsModule,
    // SharedModule,
  ],
})
export class AccountModule {}
