import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Axe } from '../models/Axe';
import { Commune } from '../models/Communes';
import { MO } from '../models/MO';
import { Province } from '../models/Province';
import { SituationEtude } from '../models/SituationEtude';
import { Statut } from '../models/Statut';
import { TauxAvancement } from '../models/TauxAvancement';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-new-projet',
  templateUrl: './new-projet.component.html',
  styleUrls: ['./new-projet.component.css']
})
export class NewProjetComponent implements OnInit {

  communes: Commune[]
  situationEtudes: SituationEtude[]
  tauxAvancements: TauxAvancement[]
  axes: Axe[]
  provinces: Province[]
  statuts: Statut[]
  mos: MO[]
  selectedCommune: number
  selectedProvince: number
  selectedSituationEtude: number
  selectedMaitreOuvrage: number
  selectedTauxAvancement: number
  selectedMO: number
  selectedStatut: number
  selectedAxe: number
    constructor(private pdiService: PdiService,private router: Router) { }
  
    ngOnInit(): void {
      this.onGetCommunes()
      this.onGetStatuts()
      this.onGetMOS()
     this.onGetProvinces()
     this.onGetAxes()
     this.onGetSituationEtude()
     this.onGetTauxAvancement()
    }
    onRowClick(){
  
    }
    onSaveProjet(f:NgForm){
    console.log(this.selectedMaitreOuvrage,"$$$$$$$$$$$$$$$$")
      f.value.commune = `${this.pdiService.host}/communes/${this.selectedCommune}`
      f.value.statut = `${this.pdiService.host}/statuts/${this.selectedStatut}`
      f.value.province = `${this.pdiService.host}/provinces/${this.selectedProvince}`
      f.value.situationEtude = `${this.pdiService.host}/situationEtudes/${this.selectedSituationEtude}`
      f.value.axe = `${this.pdiService.host}/axes/${this.selectedAxe}`
      f.value.maitreOuvrage = `${this.pdiService.host}/maitreOuvrages/${this.selectedMaitreOuvrage}`
      f.value.tauxAvancement = `${this.pdiService.host}/tauxAvancements/${this.selectedTauxAvancement}`
      console.log(f.value.tauxAvancement,"wqqqqqqqqqqqqqqqqqqqqqq")
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
  onGetProvinces(){
    this.pdiService.getResourceProvinceAll("provinces").subscribe(data=>{
      console.log(data,"*****************")
     this.provinces = data;
     console.log(data)
    },err=>{
      console.log(err)
    })
  
  }
  onGetSituationEtude(){
    this.pdiService.getResourceSituaionEtudeAll("situationEtudes").subscribe(data=>{
      console.log(data,"*****************")
     this.situationEtudes = data;
     console.log(data)
    },err=>{
      console.log(err)
    })
  
  }
  onGetAxes(){
    this.pdiService.getResourceAxeAll("axes").subscribe(data=>{
      console.log(data,"*****************")
     this.axes = data;
     console.log(data)
    },err=>{
      console.log(err)
    })
  
  }
  onGetTauxAvancement(){
    this.pdiService.getResourceTauxAvancementAll("tauxAvancements").subscribe(data=>{
      console.log(data,"*****************")
     this.tauxAvancements = data;
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
