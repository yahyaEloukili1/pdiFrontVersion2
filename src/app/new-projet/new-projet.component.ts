import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Commune } from '../models/Communes';
import { MO } from '../models/MO';
import { Province } from '../models/Province';
import { Statut } from '../models/Statut';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-new-projet',
  templateUrl: './new-projet.component.html',
  styleUrls: ['./new-projet.component.css']
})
export class NewProjetComponent implements OnInit {

  communes: Commune[]
  statuts: Statut[]
  mos: MO[]
  selectedCommune: number
  selectedMaitreOuvrage: number
  selectedMO: number
  selectedStatut: number
    constructor(private pdiService: PdiService,private router: Router) { }
  
    ngOnInit(): void {
      this.onGetCommunes()
      this.onGetStatuts()
      this.onGetMOS()
     
    }
    onRowClick(){
  
    }
    onSaveProjet(f:NgForm){
    console.log(this.selectedMaitreOuvrage,"$$$$$$$$$$$$$$$$")
      f.value.commune = `${this.pdiService.host}/communes/${this.selectedCommune}`
      f.value.statut = `${this.pdiService.host}/statuts/${this.selectedStatut}`
      f.value.maitreOuvrage = `${this.pdiService.host}/maitreOuvrages/${this.selectedMaitreOuvrage}`
      console.log(f.value.maitreOuvrage,"$$$$$$$$$$$$$$$$")
      this.pdiService.addResource("projets",f.value).subscribe(data=>{
       
        
        console.log(f.value)
        f.reset()
            },err=>{
              console.log(err)
            })
   
  }
  onGetCommunes(){
    this.pdiService.getResourceCommuneAll("communes").subscribe(data=>{
 
     this.communes = data;
     console.log(data)
    },err=>{
      console.log(err)
    })
  
  }
  onGetStatuts(){
    this.pdiService.getResourceStatutAll("statuts").subscribe(data=>{
      console.log(data,"*****************")
     this.statuts = data;
     console.log(data)
    },err=>{
      console.log(err)
    })
  
  }
  onGetMOS(){
    this.pdiService.getResourceMOAll("maitreOuvrages").subscribe(data=>{
    
     this.mos = data;
     console.log(data)
    },err=>{
      console.log(err)
    })
  
  }
  gotoList(){
    this.router.navigateByUrl('/projets');
  }
}
