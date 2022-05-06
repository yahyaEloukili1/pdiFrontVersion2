import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-nouveau-axe',
  templateUrl: './nouveau-axe.component.html',
  styleUrls: ['./nouveau-axe.component.css']
})
export class NouveauAxeComponent implements OnInit {

  constructor(private pdiService: PdiService,private router: Router) { }

  ngOnInit(): void {
  }

  onSaveAxe(f:NgForm){
    this.pdiService.addResource("axes",f.value).subscribe(data=>{
console.log(data)
f.reset()
    },err=>{
      console.log(err)
    })
}
gotoList(){
  this.router.navigateByUrl('pdi/axes');
}

}
