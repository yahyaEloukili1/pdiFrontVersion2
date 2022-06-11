import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Axe } from '../models/Axe';
import { Secteur } from '../models/Secteur';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-edit-secteur',
  templateUrl: './edit-secteur.component.html',
  styleUrls: ['./edit-secteur.component.css']
})
export class EditSecteurComponent implements OnInit {


  
  currentSecteur: Secteur
  axes: Axe[]
  selectedAxe: number
  url: string
  d:number
    constructor(private router:Router,private activatedRoute: ActivatedRoute,private pdiService:PdiService) { }
    onRowClick(e){
        this.selectedAxe = e
    }
    ngOnInit(): void {
      this.onGetAxes()
       this.url = atob(this.activatedRoute.snapshot.params['id'])
      this.pdiService.getOneResource(this.url).subscribe(data=>{
        this.currentSecteur = data;
        console.log(this.currentSecteur,"$$$$$$$$$$$$$$$")
        this.getId(this.currentSecteur._links.axe.href)
      },err=>{
        console.log(err)
      })
      console.log(this.url);
    }
    getId(url){
      let u = url.slice(0,-13)
      console.log(u,'11111111111111&')
      this.pdiService.getOneResource(u).subscribe(data=>{
      this.d = data.id
       console.log(data)
      })

   
   
    }
    
    onGetAxes(){
      this.pdiService.getResourceAll("axes").subscribe(data=>{
       this.axes = data;
       console.log(data)
      },err=>{
        console.log(err)
      })
    
    }
  
    onUpdateSecteur(value: any){
      if(this.selectedAxe)
      value.axe = `${this.pdiService.host}/axes/${this.selectedAxe}`
      else{
        value.axe = `${this.pdiService.host}/axes/${this.d}`
      }
      console.log(value,"lllllllllllllllllllll")
      console.log(value)
      this.pdiService.updateResource(this.url,value).subscribe(data=>{
        console.log(data,"**********************")
        alert("mise a jour effectué avec succés")
      },err=>{
        
      })
    }
    gotoList(){
      this.router.navigateByUrl('pdi/secteurs');
    }

}
