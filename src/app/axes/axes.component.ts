import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Axe } from '../models/Axe';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-axes',
  templateUrl: './axes.component.html',
  styleUrls: ['./axes.component.css']
})
export class AxesComponent implements OnInit {

 
  size:number = 4;
  currentPage:number = 0;
  totalPages: number;
  axes :Axe[]
  pages : Array<number>;
  currentKeyword: string = "";
  constructor(private pdiService:PdiService, private router: Router) { }

  ngOnInit(): void {
this.onGetAxes()
  }

  ajouter(){
    this.router.navigateByUrl('pdi/new-axe');
  }
  
  onGetAxes(){
    this.pdiService.getResource("axes",this.currentPage,this.size).subscribe(data=>{
      console.log(data)
     this.axes = data;
    this.totalPages = data['page'].totalPages
    this.pages = new Array<number>(this.totalPages);
    },err=>{
      console.log(err)
    })



  }
  onPageAxe(i:number){
    this.currentPage = i;
   this.chercherAxes()
  }
  onChercher(form :any){
      this.currentPage = 0;
      this.currentKeyword = form.keyword;
      this.chercherAxes()
  }

  chercherAxes(){
  
    this.pdiService.getResourceByKeyword("axes",this.currentPage,this.size,this.currentKeyword,"Axe").subscribe(data=>{
      this.axes = data;
     
     this.totalPages = data['page'].totalPages
     this.pages = new Array<number>(this.totalPages);
     },err=>{
       console.log(err) 
     })

  }
  onEditAxe(p:Axe){
    console.log(p)
      let url = p['_links'].self.href;
      this.router.navigateByUrl("pdi/edit-axe/"+btoa(url))
  }
  onDeleteAxe(url:string){
    if(confirm('Etes vous sur de vouloir supprimer cette Axe ?')){
    this.pdiService.deleteResource('axes',url).subscribe(data=>{
      this.chercherAxes();
      this.onGetAxes()
    },err=>{
      console.log(err)
    })
    }
     
   
  }  
}
