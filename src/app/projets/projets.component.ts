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

  size:number = 4;
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
    this.router.navigateByUrl('/new-projet');
  }
  
  onGetprojets(){
    this.pdiService.getResourceProjet("projets",this.currentPage,this.size).subscribe(data=>{
      console.log(data)
     this.projets = data;
     this.totalPages = data['page'].totalPages
      this.pages = new Array<number>(this.totalPages);
    },err=>{
      console.log(err)
    })
  }
    
  onGetMos(){
    this.pdiService.getResourceByKeywordMO2("maitreOuvrages",100000,"").subscribe(data=>{
      this.mos = data;
      console.log(data,"+++++++++++")
     },err=>{
       console.log(err)
     })
  }
  onGetAxes(){
    this.pdiService.getResourceAxeAll("axes").subscribe(data=>{
      this.axes = data;
      console.log(data,"+++++++++++")
     },err=>{
       console.log(err)
     })
  }
  onGetSecteurs(){
    this.pdiService.getResourceByKeywordSecteur2("secteurs",100000,"").subscribe(data=>{
      this.secteurs = data;
      console.log(data,"+++++++++++")
     },err=>{
       console.log(err)
     })
  }
  onGetProvinces(){
    this.pdiService.getResourceAll("provinces").subscribe(data=>{
     this.provinces = data;
     console.log(data,"**************************")
    },err=>{
      console.log(err)
    })
  }
  onGetCommunes(){
   
    this.pdiService.getResourceByKeywordCommune2("communes",100000,"").subscribe(data=>{
     this.communes = data;
     console.log(data,"xxxxxxxxxxxxxxxxxxxxx")
    },err=>{
      console.log(err)
    })
  }
  onGetStatuts(){
    this.pdiService.getResourceStatutAll("statuts").subscribe(data=>{
     this.statuts = data;
     console.log(data,"**************************")
    },err=>{
      console.log(err)
    })
  }
  onGetSituationEtude(){
    this.pdiService.getResourceSituaionEtudeAll("situationEtudes").subscribe(data=>{
     this.situationEtudes = data;
     console.log(data,"**************************")
    },err=>{
      console.log(err)
    })
  }
  onGetTauxAvancement(){
    this.pdiService.getResourceTauxAvancementAll("tauxAvancements").subscribe(data=>{
     this.tauxAvancements = data;
   
     console.log(data,"**************************")
    },err=>{
      console.log(err)
    })
  }
  onRowClick(){
    this.pdiService.getResourceProjetAll("provinces/"+this.selectedProvince+"/projets").subscribe(data=>{
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
    console.log(this.selectedAxe,"$$$$$$$$$$$$$$$$$$$")
    this.pdiService.getResourceProjetAll("axes/"+this.selectedAxe+"/projets").subscribe(data=>{
     
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
    this.pdiService.getResourceProjetAll("secteurs/"+this.selectedSecteur+"/projets").subscribe(data=>{
     
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
    console.log(this.selectedCommune,"$$$$$$$$$$$$$$$$$$$")
    this.pdiService.getResourceProjetAll("communes/"+this.selectedCommune+"/projets").subscribe(data=>{
     
      this.projets = data;
      this.selected = true
  this.resetProvince()
  this.resetStatut()
  this.resetMO()
  this.resetTaux()
  this.resetSituationEtude()
  this.resetSituationEtude()
  this.resetSecteur()
     console.log(data) 
    })
  }
  onRowClickMO(){
    this.contenu = ""
    console.log(this.selectedSituationEtude,"$$$$$$$$$$$$$$$$$$$")
    this.pdiService.getResourceProjetAll("maitreOuvrages/"+this.selectedMaitreOuvrage+"/projets").subscribe(data=>{
     
      this.projets = data;
      this.selected = true
  this.resetProvince()
  this.resetStatut()
  this.resetCommune()
  this.resetTaux()
  this.resetSituationEtude()
  this.resetSecteur()
  this.resetAxe()
     console.log(data) 
    })
  }
  onRowClickSituationEtude(){
    this.contenu = ""
    console.log(this.selectedSituationEtude,"$$$$$$$$$$$$$$$$$$$")
    this.pdiService.getResourceProjetAll("situationEtudes/"+this.selectedSituationEtude+"/projets").subscribe(data=>{
     
      this.projets = data;
      this.selected = true
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
    this.pdiService.getResourceProjetAll("statuts/"+this.selectedStatut+"/projets").subscribe(data=>{
     
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
    this.pdiService.getResourceProjetAll("tauxAvancements/"+this.selectedTauxAvancement+"/projets").subscribe(data=>{
     
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
  onPageProjet(i:number){
    this.currentPage = i;
   this.chercherProjets()
  }
  onChercher(form :any){
    this.resetProvince()
    this.resetCommune()
    this.resetStatut()
    this.resetSituationEtude()
    this.resetTaux()
      this.currentPage = 0;
      this.currentKeyword = form.keyword;
      this.chercherProjets()
  }

  chercherProjets(){
  
    this.pdiService.getResourceByKeywordProjet("projets",this.currentPage,this.size,this.currentKeyword).subscribe(data=>{
      this.projets = data;
     
     this.totalPages = data['page'].totalPages
     this.pages = new Array<number>(this.totalPages);
     },err=>{
       console.log(err) 
     })

  }
  onEditProjet(p:Projet){
    console.log(p)
      let url = p['_links'].self.href;
      this.router.navigateByUrl("/edit-projet/"+btoa(url))
  }
  onDeleteProjet(url:string){
    if(confirm('Etes vous sur de vouloir supprimer cette projet ?')){
    this.pdiService.deleteResource('projets',url).subscribe(data=>{
      this.chercherProjets();
      this.onGetprojets()
    },err=>{
      console.log(err)
    })
    }
     
   
  }  

}
