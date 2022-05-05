import { Component, OnInit } from '@angular/core';
import { Form, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-nouveau-statut',
  templateUrl: './nouveau-statut.component.html',
  styleUrls: ['./nouveau-statut.component.css']
})
export class NouveauStatutComponent implements OnInit {

  constructor(private pdiService: PdiService,private router: Router) { }

  ngOnInit(): void {
  }

  onSaveStatut(f:NgForm){
    this.pdiService.addResource("statuts",f.value).subscribe(data=>{
console.log(data)
f.reset()
    },err=>{
      console.log(err)
    })
}
gotoList(){
  this.router.navigateByUrl('pdi/statuts');
}
}
