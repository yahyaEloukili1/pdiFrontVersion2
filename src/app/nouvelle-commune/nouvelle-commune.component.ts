import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Province } from '../models/Province';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-nouvelle-commune',
  templateUrl: './nouvelle-commune.component.html',
  styleUrls: ['./nouvelle-commune.component.css']
})
export class NouvelleCommuneComponent implements OnInit {
provinces: Province[]
selectedProvince: number
  constructor(private pdiService: PdiService,private router: Router) { }

  ngOnInit(): void {
    this.onGetProvinces()
  }
  onRowClick(){

  }
  onSaveCommune(f:NgForm){
  
    f.value.province = `${this.pdiService.host}/provinces/${this.selectedProvince}`
    console.log(f.value)
    this.pdiService.addResource("communes",f.value).subscribe(data=>{
      f.reset()
      console.log(data)
          },err=>{
            console.log(err)
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
gotoList(){
  this.router.navigateByUrl('/communes');
}
}
