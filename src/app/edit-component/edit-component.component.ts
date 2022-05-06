import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commune } from '../models/Communes';
import { Province } from '../models/Province';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {

  currentCommune: Commune
  provinces: Province[]
  selectedProvince: number
  url: string
  d:number
    constructor(private router:Router,private activatedRoute: ActivatedRoute,private pdiService:PdiService) { }
    onRowClick(e){
        this.selectedProvince = e
    }
    ngOnInit(): void {
      this.onGetProvinces()
       this.url = atob(this.activatedRoute.snapshot.params['id'])
      this.pdiService.getOneResource(this.url).subscribe(data=>{
        this.currentCommune = data;
        console.log(this.currentCommune,"$$$$$$$$$$$$$$$")
        this.getId(this.currentCommune._links.province.href)
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
    
    onGetProvinces(){
      this.pdiService.getResourceAll("provinces").subscribe(data=>{
       this.provinces = data;
       console.log(data)
      },err=>{
        console.log(err)
      })
    
    }
  
    onUpdateCommune(value: any){
      if(this.selectedProvince)
      value.province = `${this.pdiService.host}/provinces/${this.selectedProvince}`
      else{
        value.province = `${this.pdiService.host}/provinces/${this.d}`
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
      this.router.navigateByUrl('pdi/communes');
    }
}
