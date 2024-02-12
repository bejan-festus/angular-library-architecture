import { Component } from '@angular/core';

@Component({
  selector: 'lib-deactivate-account',
  templateUrl: './deactivate-account.component.html',
})
export class DeactivateAccountComponent {
  constructor() {}

  saveSettings() {
    alert('Account has been successfully deleted!');
  }
}
