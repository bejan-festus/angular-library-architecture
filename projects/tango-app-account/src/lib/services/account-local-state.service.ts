import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { sampleType } from '../interfaces/account-local-state';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  userData = new BehaviorSubject<sampleType | null>(null)
}
