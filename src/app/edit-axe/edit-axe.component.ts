import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Axe } from '../models/Axe';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-edit-axe',
  templateUrl: './edit-axe.component.html',
  styleUrls: ['./edit-axe.component.css']
})
export class EditAxeComponent implements OnInit {

  currentAxe: Axe
  url: string
    constructor(private router:Router,private activatedRoute: ActivatedRoute,private pdiService:PdiService) { }
  
    ngOnInit(): void {
       this.url = atob(this.activatedRoute.snapshot.params['id'])
      this.pdiService.getOneResource(this.url).subscribe(data=>{
        console.log(this.url,"888888888888888888888888888888")
        this.currentAxe = data;
        console.log(this.currentAxe)
      },err=>{
        console.log(err)
      })
      console.log(this.url);
    }
    onUpdateAxe(value: any){
      this.pdiService.updateResource(this.url,value).subscribe(data=>{
        alert("Mise a jour effectué avec succés")
      },err=>{
        
      })
    }
    gotoList(){
      this.router.navigateByUrl('pdi/axes');
    }
}
