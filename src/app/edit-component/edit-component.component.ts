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
    constructor(private router:Router,private activatedRoute: ActivatedRoute,private pdiService:PdiService) { }
    onRowClick(){

    }
    ngOnInit(): void {
      this.onGetProvinces()
       this.url = atob(this.activatedRoute.snapshot.params['id'])
      this.pdiService.getOneResourceCommune(this.url).subscribe(data=>{
        this.currentCommune = data;
        console.log(this.currentCommune,"$$$$$$$$$$$$$$$")
      },err=>{
        console.log(err)
      })
      console.log(this.url);
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
      value.province = `${this.pdiService.host}/provinces/${this.selectedProvince}`
      console.log(value)
      this.pdiService.updateResource(this.url,value).subscribe(data=>{
        console.log(data,"**********************")
        alert("mise a jour effectué avec succés")
      },err=>{
        
      })
    }
    gotoList(){
      this.router.navigateByUrl('/communes');
    }
}
