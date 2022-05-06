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
   this.pdiService.getOneResource(this.url).subscribe(data=>{
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
 
    this.pdiService.getOneResource(u).subscribe(data=>{
   this.provinceId = data.id
   

    })
  }
  getcommuneId(url){
    let u = url.slice(0,-13)
 
    this.pdiService.getOneResource(u).subscribe(data=>{
   this.communeId = data.id
   

    })
  }
  getstatutId(url){
    let u = url.slice(0,-13)
 
    this.pdiService.getOneResource(u).subscribe(data=>{
   this.statutId = data.id
   console.log(data,"22222222222222222222222222222222222222222222222")

    })
  }
  getMoId(url){
   
    this.pdiService.getOneResource(url).subscribe(data=>{
   this.moId = data.id
   
   console.log(data,"22222222222222222222222222222222222222222222222")
    })
  }
  getSecteurId(url){
   
    this.pdiService.getOneResource(url).subscribe(data=>{
   this.secteurId = data.id
   

    })
  }
  getAxeId(url){
    let u = url.slice(0,-13)
    this.pdiService.getOneResource(u).subscribe(data=>{
   this.axeId = data.id
   

    })
  }
  getTauxid(url){
    let u = url.slice(0,-13)
    this.pdiService.getOneResource(u).subscribe(data=>{
   this.tauxId = data.id
   

    })
  }
  getSituationId(url){
    let u = url.slice(0,-13)
    this.pdiService.getOneResource(u).subscribe(data=>{
   this.situationId = data.id
   

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
          this.selectedMaitreOuvrage = e
          }
          onRowClickSituation(e){
            this.selectedSituationEtude = e
            console.log(e,"222222222222222")
            }
            onRowClickTaux(e){
              this.selectedTauxAvancement = e
              console.log(e,"222222222222222")
              }

  gotoList(){
    this.router.navigateByUrl('pdi/projets');
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
    if(this.selectedSituationEtude)
    value.situationEtude = `${this.pdiService.host}/situationEtudes/${this.selectedSituationEtude}`
    else{
      value.situationEtude = `${this.pdiService.host}/situationEtudes/${this.situationId}`
    }
    if(this.selectedTauxAvancement){

        value.tauxAvancement = `${this.pdiService.host}/tauxAvancements/${this.selectedTauxAvancement}`
       
      }
    else{
      value.tauxAvancement = `${this.pdiService.host}/tauxAvancements/${this.tauxId}`
    }
    if(this.selectedMaitreOuvrage){
      console.log(this.selectedMaitreOuvrage,"lllllllllllllllllllllll")
    value.maitreOuvrage = `${this.pdiService.host}/maitreOuvrages/${this.selectedMaitreOuvrage}`
    }
    else{
      value.maitreOuvrage = `${this.pdiService.host}/maitreOuvrages/${this.moId}`
    }
    if(this.selectedAxe)
    value.axe = `${this.pdiService.host}/axes/${this.selectedAxe}`
    else{
      value.axe = `${this.pdiService.host}/axes/${this.axeId}`
    }

  
    this.pdiService.updateResource(this.url,value).subscribe(data=>{

      alert("mise a jour effectué avec succés")
    },err=>{
      
    })
  }
  onGetCommunes(){
    this.pdiService.getResourceByKeywordNoPage("communes",100000,"","Commune").subscribe(data=>{
 
     this.communes = data;
  
    },err=>{
      console.log(err)
    })
  
  }
  onGetStatuts(){
    this.pdiService.getResourceAll("statuts").subscribe(data=>{
     
     this.statuts = data;
  
    },err=>{
      console.log(err)
    })
  
  }
  onGetProvinces(){
    this.pdiService.getResourceAll("provinces").subscribe(data=>{
     
     this.provinces = data;
  
    },err=>{
      console.log(err)
    })
  
  }
 
  onGetSituationEtude(){
    this.pdiService.getResourceAll("situationEtudes").subscribe(data=>{
     
     this.situationEtudes = data;
  
    },err=>{
      console.log(err)
    })
  
  }
  onGetAxes(){
     
    this.pdiService.getResourceByKeywordNoPage("axes",100000,"","Axe").subscribe(data=>{
     
     this.axes = data;
  
    },err=>{
      console.log(err)
    })
  
  }
  onGetSecteurs(){
      
    this.pdiService.getResourceByKeywordNoPage("secteurs",100000,"","Secteur").subscribe(data=>{
     
     this.secteurs = data;
  
    },err=>{
      console.log(err)
    })
  
  }
  onGetTauxAvancement(){
    this.pdiService.getResourceAll("tauxAvancements").subscribe(data=>{
     
     this.tauxAvancements = data;
  
    },err=>{
      console.log(err)
    })
  
  }
  onGetMOS(){
   
      this.pdiService.getResourceByKeywordNoPage("maitreOuvrages",100000,"","MaitreOuvrages").subscribe(data=>{
     this.mos = data;
  
    },err=>{
      console.log(err)
    })
  
  }
}
