import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MO } from '../models/MO';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-maitres-ouvrages',
  templateUrl: './maitres-ouvrages.component.html',
  styleUrls: ['./maitres-ouvrages.component.css']
})
export class MaitresOuvragesComponent implements OnInit {

 
  size:number = 4;
  currentPage:number = 0;
  totalPages: number;
  maitreOuvrages :MO[]
  pages : Array<number>;
  currentKeyword: string = "";
  constructor(private pdiService:PdiService, private router: Router) { }

  ngOnInit(): void {
this.onGetMO()
  }

  ajouter(){
    this.router.navigateByUrl('/new-mo');
  }
  onGetMO(){
    this.pdiService.getResourceMO("maitreOuvrages",this.currentPage,this.size).subscribe(data=>{
     this.maitreOuvrages = data;
     console.log(data)
    this.totalPages = data['page'].totalPages
    this.pages = new Array<number>(this.totalPages);
    },err=>{
      console.log(err)
    })

  }
  onPageMO(i:number){
    this.currentPage = i;
   this.chercherMO()
  }
  onChercher(form :any){
      this.currentPage = 0;
      this.currentKeyword = form.keyword;
      this.chercherMO()
  }

  chercherMO(){
  
    this.pdiService.getResourceByKeywordMO("maitreOuvrages",this.currentPage,this.size,this.currentKeyword).subscribe(data=>{
      this.maitreOuvrages = data;
      console.log(data)
     console.log(data,"kekekek")
     this.totalPages = data['page'].totalPages
     this.pages = new Array<number>(this.totalPages);
     },err=>{
       console.log(err) 
     })

  }
  onEditProvince(mo:MO){
    console.log(mo)
      let url = mo['_links'].self.href;
      this.router.navigateByUrl("/edit-mo/"+btoa(url))
  }
  onDeleteProvince(url:string){
    if(confirm('Etes vous sur de vouloir supprimer cette province ?')){
    this.pdiService.deleteResource('maitreOuvrage',url).subscribe(data=>{
      this.chercherMO();
      this.onGetMO()
    },err=>{
      console.log(err)
    })
    }
     
   
  }  
}
