import { NgModule } from '@angular/core';
import { AccountModule } from 'projects/tango-app-account/src/public-api';

@NgModule({
  imports: [
    AccountModule
  ]
})
export class AccountWrapperModule { }
