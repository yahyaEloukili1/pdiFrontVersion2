import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MO } from '../models/MO';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-edit-mo',
  templateUrl: './edit-mo.component.html',
  styleUrls: ['./edit-mo.component.css']
})
export class EditMoComponent implements OnInit {
  currentMO: MO
  url: string
    constructor(private router:Router,private activatedRoute: ActivatedRoute,private pdiService:PdiService) { }
  
    ngOnInit(): void {
       this.url = atob(this.activatedRoute.snapshot.params['id'])
      this.pdiService.getOneResourceMO(this.url).subscribe(data=>{
        console.log(data)
        this.currentMO = data;
        console.log(this.currentMO)
      },err=>{
        console.log(err)
      })
      console.log(this.url);
    }
    onUpdateMO(value: any){
      this.pdiService.updateResource(this.url,value).subscribe(data=>{
        alert("mise a jour effectué avec succés")
    
      },err=>{
        
      })
    }
    gotoList(){
      this.router.navigateByUrl('/mos');
    }
}
