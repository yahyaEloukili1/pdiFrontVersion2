import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projet } from '../models/Projet';
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
  projets :Projet[]
  pages : Array<number>;
  currentKeyword: string = "";
  constructor(private pdiService:PdiService, private router: Router) { }

  ngOnInit(): void {
this.onGetprojets()
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
  onPageProjet(i:number){
    this.currentPage = i;
   this.chercherProjets()
  }
  onChercher(form :any){
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
