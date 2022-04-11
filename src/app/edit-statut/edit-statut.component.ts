import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Statut } from '../models/Statut';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-edit-statut',
  templateUrl: './edit-statut.component.html',
  styleUrls: ['./edit-statut.component.css']
})
export class EditStatutComponent implements OnInit {

  currentStatut: Statut
  url: string
    constructor(private router:Router,private activatedRoute: ActivatedRoute,private pdiService:PdiService) { }
  
    ngOnInit(): void {
       this.url = atob(this.activatedRoute.snapshot.params['id'])
      this.pdiService.getOneResourceStatut(this.url).subscribe(data=>{
        this.currentStatut = data;
        console.log(this.currentStatut)
      },err=>{
        console.log(err)
      })
      console.log(this.url);
    }
    onUpdateStatut(value: any){
      this.pdiService.updateResource(this.url,value).subscribe(data=>{
        alert("mise a jour effectué avec succés")
      },err=>{
        
      })
    }
    gotoList(){
      this.router.navigateByUrl('/statuts');
    }
}
