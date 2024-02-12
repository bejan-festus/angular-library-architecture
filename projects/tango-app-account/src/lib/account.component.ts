import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { GlobalStateService } from 'tango-app-shared';

@Component({
  selector: 'lib-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {
  constructor(private api:ApiService, private gs:GlobalStateService) {
    this.api.getData().subscribe((e)=>{
      console.log(e);
    })
    this.gs.environment.subscribe((e)=>{
      if(e){
        console.log(e.env);
        
      }
    })
  }

  ngOnInit(): void {}
}
