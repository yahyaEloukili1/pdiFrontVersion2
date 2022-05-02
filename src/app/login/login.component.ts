import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
mode = 0
  constructor(private pdiService: PdiService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm){
      this.pdiService.login(f.value).subscribe(resp=>{
        let jwt = resp.headers.get('Authorization')
        this.pdiService.saveToken(jwt);
        // this.pdiService.save(jwt) 
        this.router.navigateByUrl("pdi/projets")
        console.log(jwt)
        
      },err=>{
        this.mode = 1;
      })
  }
}
