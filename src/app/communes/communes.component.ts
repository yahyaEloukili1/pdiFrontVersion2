import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commune } from '../models/Communes';
import { Province } from '../models/Province';
import { PdiService } from '../services/pdi.service';

@Component({
  selector: 'app-communes',
  templateUrl: './communes.component.html',
  styleUrls: ['./communes.component.css']
})
export class CommunesComponent implements OnInit {

  size:number = 4;
  currentPage:number = 0;
  totalPages: number;
  communes :Commune[]
  provinces: Province[]
  pages : Array<number>;
  selectedProvince: Province
  d="eee"
  currentKeyword: string = "";
  selected: boolean
  constructor(private pdiService:PdiService, private router: Router) { }

  ngOnInit(): void {
     this.onGetCommunes()
     this.onGetProvinces()
  }
  onRowClick(){
    this.pdiService.getResourceAll("provinces/"+this.selectedProvince+"/communes").subscribe(data=>{
      this.communes = data;
      this.selected = true
      
     console.log(data) 
    })
  }
  reset(){
    this.selectedProvince = {} as Province
  }
  ajouter(){
    this.router.navigateByUrl('pdi/new-commune');
  }
  onGetCommunes(){
    this.pdiService.getResource("communes",this.currentPage,this.size).subscribe(data=>{
      
     
     this.communes = data;
    this.totalPages = data['page'].totalPages
    this.pages = new Array<number>(this.totalPages);
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
  onPageCommune(i:number){
    this.currentPage = i;
   this.chercherCommunes()
  }
  onChercher(form :any){
    this.reset()
      this.currentPage = 0;
      this.currentKeyword = form.keyword;
    
      this.selected = false
      this.chercherCommunes()
  }

  chercherCommunes(){
  
    this.pdiService.getResourceByKeyword("communes",this.currentPage,this.size,this.currentKeyword,"Commune").subscribe(data=>{
      this.communes = data;
     
     this.totalPages = data['page'].totalPages
     this.pages = new Array<number>(this.totalPages);
     },err=>{
       console.log(err) 
     })

  }
  onEditCommune(p:Commune){
    console.log(p)
      let url = p['_links'].self.href;
      this.router.navigateByUrl("pdi/edit-commune/"+btoa(url))
  }
  onDeleteCommune(url:string){
    if(confirm('Etes vous sur de vouloir supprimer cette commune ?')){
    this.pdiService.deleteResource('communes',url).subscribe(data=>{
      this.chercherCommunes();
    },err=>{
      console.log(err)
    })
    }
     
   
  }  


}
