import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-nouvelle-province',
  templateUrl: './nouvelle-province.component.html',
  styleUrls: ['./nouvelle-province.component.css']
})
export class NouvelleProvinceComponent implements OnInit {

  constructor(private pdiService: PdiService, private router: Router) { }

  ngOnInit(): void {
  }

  onSaveProvince(f:NgForm){
    this.pdiService.addResource("provinces",f.value).subscribe(data=>{
console.log(data)
f.reset()
    },err=>{
      console.log(err)
    })
}
  gotoList(){
    this.router.navigateByUrl('pdi/provinces');
  }
}
