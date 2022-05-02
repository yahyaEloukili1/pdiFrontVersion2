import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PdiService } from "./services/pdi.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private pdi: PdiService,private router: Router){}
  canActivate(){
    if(this.pdi.loggedIn()){
      return true
    }
    else{
      this.router.navigateByUrl('pdi/login')
      return false
    }
  }
  
}
