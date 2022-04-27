import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Axe } from '../models/Axe';
import { Secteur } from '../models/Secteur';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-secteurs',
  templateUrl: './secteurs.component.html',
  styleUrls: ['./secteurs.component.css']
})
export class SecteursComponent implements OnInit {


  size:number = 4;
  currentPage:number = 0;
  totalPages: number;
  secteurs :Secteur[]
 axes:Axe[]
  pages : Array<number>;
  selectedAxe:Axe
  d="eee"
  currentKeyword: string = "";
  selected: boolean
  constructor(private pdiService:PdiService, private router: Router) { }

  ngOnInit(): void {
this.onGetSecteurs()
this.onGetAxes()
  }
  onRowClick(){
    this.pdiService.getResourceSecteurAll("axes/"+this.selectedAxe+"/secteurs").subscribe(data=>{
      this.secteurs = data;
      this.selected = true
     console.log(data) 
    })
  }

  ajouter(){
    this.router.navigateByUrl('/new-secteur');
  }
  onGetSecteurs(){
    this.pdiService.getResourceSecteur("secteurs",this.currentPage,this.size).subscribe(data=>{
      console.log(data,"******************")
     
     this.secteurs = data;
    this.totalPages = data['page'].totalPages
    this.pages = new Array<number>(this.totalPages);
    },err=>{
      console.log(err)
    })

  }
  onGetAxes(){
    this.pdiService.getResourceAxeAll("axes").subscribe(data=>{
     this.axes = data;
     console.log(data)
    },err=>{
      console.log(err)
    })

  }
  onPageSecteur(i:number){
    this.currentPage = i;
   this.checrherSecteurs()
  }
  onChercher(form :any){
      this.currentPage = 0;
      this.currentKeyword = form.keyword;
      // window.location.reload()
      console.log("chrcher")
      this.reset()
      this.selected = false
      this.checrherSecteurs()
  }

  checrherSecteurs(){
  
    this.pdiService.getResourceByKeywordSecteur("secteurs",this.currentPage,this.size,this.currentKeyword).subscribe(data=>{
      this.secteurs = data;
     
     this.totalPages = data['page'].totalPages
     this.pages = new Array<number>(this.totalPages);
     },err=>{
       console.log(err) 
     })

  }
  onEditSecteur(p:Secteur){
    console.log(p)
      let url = p['_links'].self.href;
      this.router.navigateByUrl("/edit-secteur/"+btoa(url))
  }
  reset(){
    this.selectedAxe = {id: 8, axe: "-"} as Axe
  }
  onDeleteSecteur(url:string){
    if(confirm('Etes vous sur de vouloir supprimer cette secteur ?')){
    this.pdiService.deleteResource('secteurs',url).subscribe(data=>{
      this.checrherSecteurs();
    },err=>{
      console.log(err)
    })
    }
     
   
  }  

}
