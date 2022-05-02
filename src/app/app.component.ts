import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PdiService } from './services/pdi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pdi-front-version1';
  token
  constructor(public pdiService: PdiService,private router: Router){
    this.met()
  }
  met(){
   this.token = this.pdiService.loadToken()
   console.log(this.token,"ksksksksksk")
  }
  logout(){
    this.pdiService.logout()
    this.router.navigateByUrl('pdi/login')
  }
}
