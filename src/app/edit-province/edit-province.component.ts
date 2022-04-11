import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Province } from '../models/Province';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-edit-province',
  templateUrl: './edit-province.component.html',
  styleUrls: ['./edit-province.component.css']
})
export class EditProvinceComponent implements OnInit {
currentProvince: Province
url: string
  constructor(private router:Router,private activatedRoute: ActivatedRoute,private pdiService:PdiService) { }

  ngOnInit(): void {
     this.url = atob(this.activatedRoute.snapshot.params['id'])
    this.pdiService.getOneResource(this.url).subscribe(data=>{
      this.currentProvince = data;
      console.log(this.currentProvince)
    },err=>{
      console.log(err)
    })
    console.log(this.url);
  }
  onUpdateProvince(value: any){
    this.pdiService.updateResource(this.url,value).subscribe(data=>{
      alert("mise a jour effectué avec succés")
    },err=>{
      
    })
  }
  gotoList(){
    this.router.navigateByUrl('/provinces');
  }
}
