import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService 
//implements CanActivate 
{

  constructor(private auth:AuthService) { }
  // canActivate(){
  //   this.auth.user$.pipe(map(user => {

  //   }))
  // }
}