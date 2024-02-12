import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { sampleType } from '../interfaces/global-state';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  userData = new BehaviorSubject<sampleType | null>(null)
  environment = new BehaviorSubject<any>(null)
}
