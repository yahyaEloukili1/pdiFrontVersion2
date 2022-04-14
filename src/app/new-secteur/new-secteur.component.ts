import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Axe } from '../models/Axe';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-new-secteur',
  templateUrl: './new-secteur.component.html',
  styleUrls: ['./new-secteur.component.css']
})
export class NewSecteurComponent implements OnInit {

  axes: Axe[]
  selectedAxe: number
    constructor(private pdiService: PdiService,private router: Router) { }
  
    ngOnInit(): void {
      this.onGetAxes()
    }
    onRowClick(){
  
    }
    onSaveSecteur(f:NgForm){
     f.value.axe = `${this.pdiService.host}/axes/${this.selectedAxe}`
      console.log(f.value.axe)
      console.log(f.value)
      this.pdiService.addResource("secteurs",f.value).subscribe(data=>{
      
        f.reset()
        console.log(data)
            },err=>{
              console.log(err)
            })
  }
  onGetAxes(){
    this.pdiService.getResourceAxeAll("axes").subscribe(data=>{
     this.axes = data;
     console.log(data)
    },err=>{
      console.log(err)
    })
  
  }
  gotoList(){
    this.router.navigateByUrl('/secteurs');
  }
  
}
