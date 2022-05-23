import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  size:number = 5;
  currentPage:number = 0;
  totalPages: number;
  contenu
  projets :Projet[]
  axes :Axe[]
  pages : Array<number>;
  currentKeyword: string = "";
  selectedProvince: Province
  selectedCommune: Commune
  selectedAxe: Axe
  selectedSecteur: Secteur
  selectedMaitreOuvrage: MO
  selectedSituationEtude: SituationEtude
  selectedTauxAvancement: TauxAvancement
  selectedStatut: Statut
  provinces: Province[]
  communes: Commune[]
  secteurs: Secteur[]
  mos: MO[]
  situationEtudes: SituationEtude[]
  tauxAvancements: TauxAvancement[]
  statuts: Statut[]
  selected: Boolean
  constructor(private pdiService:PdiService, private router: Router) { }

  ngOnInit(): void {
    this.onGetprojets()
    this.onGetProvinces()
    this.onGetCommunes()
    this.onGetStatuts()
    this.onGetSituationEtude()
    this.onGetTauxAvancement()
    this.onGetMos()
    this.onGetAxes()
    this.onGetSecteurs()
  }
 
 
  onGetprojets(){
    this.pdiService.getResource("projets",this.currentPage,this.size).subscribe(data=>{
     this.projets = data;
     this.totalPages = data['page'].totalPages
      this.pages = new Array<number>(this.totalPages);
    },err=>{

    })
  }
    
 
  onPageProjet(i:number){
    this.currentPage = i;
   this.chercherProjets()
  }
  onChercher(form :any){
    this.resetProvince()
    this.resetCommune()
    this.resetStatut()
    this.resetSituationEtude()
      this.currentPage = 0;
      if(!form.keyword){
        form.keyword = ""
      }
      
      this.currentKeyword = form.keyword;
      this.selected = false

      this.chercherProjets()
  }

  chercherProjets(){
  
    this.pdiService.getResourceByKeyword("projets",this.currentPage,this.size,this.currentKeyword,"Projet").subscribe(data=>{
      this.projets = data;
     this.totalPages = data['page'].totalPages
     this.pages = new Array<number>(this.totalPages);
     },err=>{
  
     })

  }
  onGetMos(){
    this.pdiService.getResourceByKeywordNoPage("maitreOuvrages",100000,"","MaitreOuvrage").subscribe(data=>{
      this.mos = data;
      
     },err=>{
      
     })
  }
  onGetAxes(){
    this.pdiService.getResourceAll("axes").subscribe(data=>{
      this.axes = data;
      
     },err=>{
      
     })
  }
  onGetSecteurs(){
    this.pdiService.getResourceByKeywordNoPage("secteurs",100000,"","Secteur").subscribe(data=>{
      this.secteurs = data;
      
     },err=>{
      
     })
  }
  onGetProvinces(){
    this.pdiService.getResourceAll("provinces").subscribe(data=>{
     this.provinces = data;
    },err=>{
     
    })
  }
  onGetCommunes(){
   
    this.pdiService.getResourceByKeywordNoPage("communes",100000,"","Commune").subscribe(data=>{
     this.communes = data;
   
    },err=>{
      
    })
  }
  onGetStatuts(){
    this.pdiService.getResourceAll("statuts").subscribe(data=>{
     this.statuts = data;
    },err=>{

    })
  }
  onGetSituationEtude(){
    this.pdiService.getResourceAll("situationEtudes").subscribe(data=>{
     this.situationEtudes = data;
    },err=>{

    })
  }
  onGetTauxAvancement(){
    this.pdiService.getResourceAll("tauxAvancements").subscribe(data=>{
     this.tauxAvancements = data;
   
    },err=>{

    })
  }
  onRowClick(){
    this.pdiService.getResourceAll("provinces/"+this.selectedProvince+"/projets").subscribe(data=>{
      this.projets = data;
      this.selected = true
      this.contenu = ""
  this.resetCommune()
  this.resetStatut()
  this.resetTaux()
  this.resetSituationEtude
  this.resetMO()
  this.resetAxe()
  this.resetSecteur()
     console.log(data) 
    })
  }
  onRowClickAxe(){
    this.contenu = ""
    this.pdiService.getResourceAll("axes/"+this.selectedAxe+"/projets").subscribe(data=>{
      this.projets = data;
      this.selected = true
  this.resetProvince()
  this.resetStatut()
  this.resetMO()
  this.resetTaux()
  this.resetSituationEtude()
  this.resetSecteur()
  this.resetCommune()
     console.log(data) 
    })  
  }
  onRowClickSecteur(){
    this.contenu = ""
    console.log(this.selectedSecteur,"$$$$$$$$$$$$$$$$$$$")
    this.pdiService.getResourceAll("secteurs/"+this.selectedSecteur+"/projets").subscribe(data=>{
     
      this.projets = data;
      this.selected = true
  this.resetProvince()
  this.resetStatut()
  this.resetMO()
  this.resetTaux()
  this.resetSituationEtude()
  this.resetAxe()
  this.resetCommune()
     console.log(data) 
    })  
  }
  onRowClickCommune(){
    this.contenu = ""
    this.pdiService.getResourceAll("communes/"+this.selectedCommune+"/projets").subscribe(data=>{
     
      this.projets = data;
      this.selected = true
  this.resetProvince()
  this.resetStatut()
  this.resetMO()
  this.resetTaux()
  this.resetSituationEtude()
  this.resetSituationEtude()
  this.resetSecteur()
    
    })
  }
  onRowClickMO(){
    this.contenu = ""
    this.pdiService.getResourceAll("maitreOuvrages/"+this.selectedMaitreOuvrage+"/projets").subscribe(data=>{
      this.projets = data;
      this.selected = true
  this.resetProvince()
  this.resetStatut()
  this.resetCommune()
  this.resetTaux()
  this.resetSituationEtude()
  this.resetSecteur()
  this.resetAxe()
  
    })
  }
  onRowClickSituationEtude(){
    this.contenu = ""
    console.log(this.selectedSituationEtude,"$$$$$$$$$$$$$$$$$$$")
    this.pdiService.getResourceAll("situationEtudes/"+this.selectedSituationEtude+"/projets").subscribe(data=>{
      this.projets = data;
      this.selected = true;
  this.resetProvince()
  this.resetStatut()
  this.resetCommune()
  this.resetTaux()
  this.resetMO()
  this.resetSecteur()
  this.resetAxe()
     console.log(data) 
    })
  }
  onRowClickStatut(){
    this.contenu = ""
    this.pdiService.getResourceAll("statuts/"+this.selectedStatut+"/projets").subscribe(data=>{
     
      this.projets = data;
      this.selected = true
  this.resetProvince()
  this.resetCommune()
  this.resetSituationEtude()
  this.resetTaux()
  this.resetMO()
  this.resetSecteur()
  this.resetAxe()
     console.log(data) 
    })
  }
  onRowClickTauxAvancement(){
    this.contenu = ""
    console.log(this.selectedSituationEtude,"$$$$$$$$$$$$$$$$$$$")
    this.pdiService.getResourceAll("tauxAvancements/"+this.selectedTauxAvancement+"/projets").subscribe(data=>{
     
      this.projets = data;
      this.selected = true
  this.resetProvince()
  this.resetStatut()
  this.resetCommune()
  this.resetSituationEtude()
  this.resetMO()
  this.resetAxe()
    this.resetSecteur()
  
     console.log(data) 
    })

  }
  resetProvince(){
    this.selectedProvince = {} as Province
  }
  resetMO(){
    this.selectedMaitreOuvrage = {} as MO
  }
  resetCommune(){
    this.selectedCommune = {} as Commune
  }
  resetStatut(){
    this.selectedStatut = {} as Statut
  }
  resetSituationEtude(){
    this.selectedSituationEtude = {} as SituationEtude
  }
  resetTaux(){
    this.selectedTauxAvancement = {} as TauxAvancement
  }
  resetSecteur(){
    this.selectedSecteur = {} as Secteur
  }
  resetAxe(){
    this.selectedAxe = {} as Axe
  }
  reset(){
    this.selectedProvince = {} as Province
  }
  ajouter(){
    this.router.navigateByUrl('pdi/new-projet');
  }
  onEditProjet(p:Projet){
    console.log(p)
      let url = p['_links'].self.href;
      this.router.navigateByUrl("pdi/edit-projet/"+btoa(url))
  }
  onDeleteProjet(url:string){
    if(confirm('Etes vous sur de vouloir supprimer cette projet ?')){
    this.pdiService.deleteResource('projets',url).subscribe(data=>{
      this.chercherProjets();
      this.onGetprojets()
    },err=>{
    
    })
    }
    }  

}
