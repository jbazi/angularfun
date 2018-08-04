import { Injectable } from '@angular/core';

//Injectable is needed ONLY when a service has dependency in a constructor 
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
