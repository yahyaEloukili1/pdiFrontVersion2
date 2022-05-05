import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Statut } from '../models/Statut';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-statuts',
  templateUrl: './statuts.component.html',
  styleUrls: ['./statuts.component.css']
})
export class StatutsComponent implements OnInit {

 
  size:number = 4;
  currentPage:number = 0;
  totalPages: number;
  statuts :Statut[]
  pages : Array<number>;
  currentKeyword: string = "";
  constructor(private pdiService:PdiService, private router: Router) { }

  ngOnInit(): void {
this.onGetStatuts()
  }

  ajouter(){
    this.router.navigateByUrl('pdi/new-statut');
  }
  onGetStatuts(){
    this.pdiService.getResource("statuts",this.currentPage,this.size).subscribe(data=>{
     this.statuts = data;
    this.totalPages = data['page'].totalPages
    this.pages = new Array<number>(this.totalPages);
    },err=>{
      console.log(err)
    })

  }
  onPageStatut(i:number){
    this.currentPage = i;
   this.chercherStatuts()
  }
  onChercher(form :any){
      this.currentPage = 0;
      this.currentKeyword = form.keyword;
      this.chercherStatuts()
  }

  chercherStatuts(){
  
    this.pdiService.getResourceByKeyword("statuts",this.currentPage,this.size,this.currentKeyword,"Statut").subscribe(data=>{
      this.statuts = data;
     
     this.totalPages = data['page'].totalPages
     this.pages = new Array<number>(this.totalPages);
     },err=>{
       console.log(err) 
     })

  }
  onEditStatut(p:Statut){
    console.log(p)
      let url = p['_links'].self.href;
      this.router.navigateByUrl("pdi/edit-statut/"+btoa(url))
  }
  onDeleteStatut(url:string){
    if(confirm('Etes vous sur de vouloir supprimer cette province ?')){
    this.pdiService.deleteResource('statuts',url).subscribe(data=>{
      this.chercherStatuts();
      this.onGetStatuts()
    },err=>{
      console.log(err)
    })
    }
     
   
  }  

}
