import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-nouvelle-mo',
  templateUrl: './nouvelle-mo.component.html',
  styleUrls: ['./nouvelle-mo.component.css']
})
export class NouvelleMoComponent implements OnInit {

  constructor(private pdiService: PdiService,private router: Router) { }

  ngOnInit(): void {
  }

  onSaveMO(f:NgForm){
    this.pdiService.addResource("maitreOuvrages",f.value).subscribe(data=>{
console.log(data)
f.reset()
    },err=>{
      console.log(err)
    })
}
gotoList(){
  this.router.navigateByUrl('pdi/mos');
}

}
