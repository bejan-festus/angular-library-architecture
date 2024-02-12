import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalStateService } from 'tango-app-shared';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl:string

  constructor(private http:HttpClient, private gs:GlobalStateService) {
    gs.environment.subscribe((e)=>{
      if(e){
        this.apiUrl = e.endpointUrl
      }
    })
   }

  getData() {
    return this.http.get(this.apiUrl)
  }
}
