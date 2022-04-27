import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Axe } from '../models/Axe';
import { Commune } from '../models/Communes';
import { MO } from '../models/MO';
import { Projet } from '../models/Projet';
import { Province } from '../models/Province';
import { Secteur } from '../models/Secteur';
import { SituationEtude } from '../models/SituationEtude';
import { Statut } from '../models/Statut';
import { TauxAvancement } from '../models/TauxAvancement';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-edit-projet',
  templateUrl: './edit-projet.component.html',
  styleUrls: ['./edit-projet.component.css']
})
export class EditProjetComponent implements OnInit {

  currentProjet: Projet
  selectedProvince: number
  url: string
  communes: Commune[]
  situationEtudes: SituationEtude[]
  tauxAvancements: TauxAvancement[]
  axes: Axe[]
  provinces: Province[]
  statuts: Statut[]
  mos: MO[]
  secteurs: Secteur[]
  selectedCommune: number
 
  selectedSituationEtude: number
  selectedMaitreOuvrage: number
  selectedTauxAvancement: number
  selectedMO: number
  selectedStatut: number
  selectedAxe: number
  selectedSecteur: number
  provinceId
  statutId
  secteurId
  axeId
  moId
  situationId
  tauxId
  communeId

    constructor(private router:Router,private activatedRoute: ActivatedRoute,private pdiService:PdiService) { }

  ngOnInit(): void {

    this.url = atob(this.activatedRoute.snapshot.params['id'])
   this.pdiService.getOneResourceProjet(this.url).subscribe(data=>{
     this.currentProjet = data;
     console.log(this.currentProjet,"$$$$$$$$$$$$$$$")
     this.getprovinceId(this.currentProjet._links.province.href)
     this.getcommuneId(this.currentProjet._links.commune.href)
     this.getstatutId(this.currentProjet._links.statut.href)
     this.getMoId(this.currentProjet._links.maitreOuvrage.href)
     this.getAxeId(this.currentProjet._links.axe.href)
     this.getTauxid(this.currentProjet._links.tauxAvancement.href)
     this.getSecteurId(this.currentProjet._links.secteur.href)
     this.getSituationId(this.currentProjet._links.situationEtude.href)
   },err=>{
     console.log(err)
   })
   console.log(this.url);
   this.onGetCommunes()
   this.onGetStatuts()
   this.onGetMOS()
  this.onGetProvinces()
  this.onGetAxes()
  this.onGetSecteurs()
  this.onGetSituationEtude()
  this.onGetTauxAvancement()
  }
  getprovinceId(url){
    let u = url.slice(0,-13)
    console.log(u,'11111111111111&')
    this.pdiService.getOneResource(u).subscribe(data=>{
   this.provinceId = data.id
   
   console.log(data)
    })
  }
  getcommuneId(url){
    let u = url.slice(0,-13)
    console.log(u,'11111111111111&')
    this.pdiService.getOneResourceCommune(u).subscribe(data=>{
   this.communeId = data.id
   
   console.log(data)
    })
  }
  getstatutId(url){
    let u = url.slice(0,-13)
    console.log(u,'11111111111111&')
    this.pdiService.getOneResourceStatut(u).subscribe(data=>{
   this.statutId = data.id
   
   console.log(data)
    })
  }
  getMoId(url){
   
    this.pdiService.getOneResourceMO(url).subscribe(data=>{
   this.moId = data.id
   
   console.log(data)
    })
  }
  getSecteurId(url){
   
    this.pdiService.getOneResourceSecteur(url).subscribe(data=>{
   this.secteurId = data.id
   
   console.log(data)
    })
  }
  getAxeId(url){
    let u = url.slice(0,-13)
    this.pdiService.getOneResourceAxe(u).subscribe(data=>{
   this.axeId = data.id
   
   console.log(data)
    })
  }
  getTauxid(url){
    let u = url.slice(0,-13)
    this.pdiService.getOneResourcetaux(u).subscribe(data=>{
   this.tauxId = data.id
   
   console.log(data)
    })
  }
  getSituationId(url){
    let u = url.slice(0,-13)
    this.pdiService.getOneResourceSituation(u).subscribe(data=>{
   this.situationId = data.id
   
   console.log(data)
    })
  }

  onEditProjet(p: Projet){

    let url = p['_links'].self.href;
    this.router.navigateByUrl("/edit-projet/"+btoa(url))
  }
  onRowClick(e){
  this.selectedProvince = e
  }
  onRowClickCommune(e){
    this.selectedCommune = e
    }
  onRowClickStatut(e){
   
    this.selectedStatut = e
    }
    onRowClickSecteur(e){
      this.selectedSecteur = e
      }
      onRowClickAxe(e){
        this.selectedAxe = e
        }
        onRowClickMO(e){
          this.selectedMO = e
          }
          onRowClickSituation(e){
            this.selectedSituationEtude = e
            console.log(e,"222222222222222")
            }

  gotoList(){
    this.router.navigateByUrl('/projets');
  }
  onUpdateCommune(value: any){
    if(this.selectedProvince)
    value.province = `${this.pdiService.host}/provinces/${this.selectedProvince}`
    else{
      value.province = `${this.pdiService.host}/provinces/${this.provinceId}`
    }
    if(this.selectedCommune)
    value.commune = `${this.pdiService.host}/communes/${this.selectedCommune}`
    else{
      value.commune = `${this.pdiService.host}/communes/${this.communeId}`
    }
    if(this.selectedSecteur)
    value.secteur = `${this.pdiService.host}/secteurs/${this.selectedSecteur}`
    else{
      value.secteur = `${this.pdiService.host}/secteurs/${this.secteurId}`
    }
    if(this.selectedStatut)
    value.statut = `${this.pdiService.host}/statuts/${this.selectedStatut}`
    else{
      value.statut = `${this.pdiService.host}/statuts/${this.statutId}`
    }
    console.log(this.selectedStatut,"PPPPPPPPPPPPPPpp")
    if(this.selectedSituationEtude)
    value.situationEtude = `${this.pdiService.host}/situationEtudes/${this.selectedSituationEtude}`
    else{
      value.situationEtude = `${this.pdiService.host}/situationEtudes/${this.situationId}`
    }
    if(this.selectedTauxAvancement)
    value.tauxAvancement = `${this.pdiService.host}/tauxAvancements/${this.selectedTauxAvancement}`
    else{
      value.tauxAvancement = `${this.pdiService.host}/tauxAvancements/${this.tauxId}`
    }
    if(this.selectedMaitreOuvrage)
    value.maitreOuvrage = `${this.pdiService.host}/maitreOuvrages/${this.selectedMO}`
    else{
      value.maitreOuvrage = `${this.pdiService.host}/maitreOuvrages/${this.moId}`
    }
    if(this.selectedAxe)
    value.axe = `${this.pdiService.host}/axes/${this.selectedAxe}`
    else{
      value.maitreOuvrage = `${this.pdiService.host}/axes/${this.axeId}`
    }

    console.log(value)
    this.pdiService.updateResource(this.url,value).subscribe(data=>{
      console.log(data,"**********************")
      alert("mise a jour effectué avec succés")
    },err=>{
      
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
  onGetSecteurs(){
    this.pdiService.getResourceSecteurAll("secteurs").subscribe(data=>{
      console.log(data,"*****************")
     this.secteurs = data;
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
}
