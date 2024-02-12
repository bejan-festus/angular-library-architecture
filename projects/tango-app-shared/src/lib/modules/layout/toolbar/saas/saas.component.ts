import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-saas',
  templateUrl: './saas.component.html',
  styleUrls: ['./saas.component.scss'],
})
export class SaasComponent implements OnInit {
  @Input() appPageTitleDisplay: boolean;

  constructor() {}

  ngOnInit(): void {}
}
