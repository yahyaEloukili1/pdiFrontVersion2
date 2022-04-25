import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from "../../../node_modules/chart.js";
 import { PdiService } from '../services/pdi.service';
 import { DashboardHelper } from "../dashboard.helper";
 import { DashboardHelperProvince } from '../dashboard.helpe.province';
 import { DashboardHelperStatut } from '../dashboard.helpe.statut';
 import { DashboardHelperAxe } from '../dashboard.helpe.axe';
 import { DashboardHelperEtude } from '../dashboard.helpe.etude';
import { DashboardHelperTauxAvancement } from '../dashboard.helper.tauxAvancement';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nombres;
  nombres3
  communes
  result
  myChart

  constructor(private pdiService: PdiService, private dashboardHelper: DashboardHelper,private dashboardHelperProvince: DashboardHelperProvince,private dashboardHelperStatut: DashboardHelperStatut,private dashboardHelperAxe: DashboardHelperAxe,private dshboardHelperEtude: DashboardHelperEtude,private dashboardHelperTaux: DashboardHelperTauxAvancement) { 
  }

  ngOnInit(): void {
    Chart.register(...registerables);
     this.dashboardHelper.populateDashboardCommune()
     this.dashboardHelperProvince.populateDashboardProvince()
     this.dashboardHelperStatut.populateDashboardStatut()
     this.dashboardHelperAxe.populateDashboardAxe()
     this.dshboardHelperEtude.populateDashboardEtude()
     this.dashboardHelperTaux.populateDashboardTauxAvancement()

  }

  // populateDashboardCommune(){
  
  //   (async()=>{
    
  //      this.result = await this.pdiService.getResourceAll('communes1').toPromise()
  //       this.nombres = new Array(this.result.length)
  //     for (let i = 0; i < this.result.length; i++) {
  //       (async()=>{
    
  //     const result = await  this.pdiService.getResourceAll('communes/'+this.result[i].id+'/projets').toPromise()
  //     console.log("B", result)
    
  //   })()
  //       this.pdiService.getResourceAll('communes/'+this.result[i].id+'/projets').subscribe(result2=>{
  //          console.log(result2['_embedded'].projets.length,"ùùùùùùùùùù") 
         
  //          if(result2['_embedded'].projets.length==0){
  //           this.nombres[i]=null
  //          }
  //             else{
  //               this.nombres[i] = result2['_embedded'].projets.length
  //             }
       
  //       if(i==this.result.length-1)
      
  //        this.nombres3 =  this.nombres.slice(0,this.nombres.length)
  //        if(this.myChart!=null)
  //        this.myChart.destroy()
  //        var data2= this.nombres.slice(0,this.nombres.length);
  //        var labesl2 = this.communes
  //     //    for (let i = 0; i <= data2.length; i++){
  //     //     if (data2[i] === null) {
  //     //         data2.splice(i, 1);
  //     //         labesl2.splice(i, 1);
  //     //         i--;
  //     //     }
  //     // }
  //         this.myChart = new Chart("myChart", {
  //         type: 'bar',
          
  //         data: {
            
  //             labels: labesl2,
              
  //             datasets: [{
  //                 label: 'Répartition par commune',
               
  //                 data: data2,
                  
  //                 backgroundColor: 
  //                     'rgba(255, 99, 132, 0.2)',
  //                 borderColor: 
  //                     'rgba(255, 99, 132, 1)',
    
  //                 borderWidth: 1
  //             }]
  //         },
  //         options: {
  //   skipNull: true,
  //             scales: {
  //                 y: {
  //                     beginAtZero: true
  //                 }
  //             },
  //             plugins:{
              
               
  //               legend:{
  //                 display: false
  //               }
  //             }
  //         }
  //       });
  //      console.log(this.nombres3)
  //         })    
          
  //     }
    
  //     this.communes = new Array(this.result.length)
    
  //    for (let i = 0; i < this.communes.length; i++) {
  //      delete this.result['id']
  //      this.communes[i] =  this.result[i].commune
    
  //    }
    
    
     
    
  //   })()
    
    
    
    
    
    
    
    
    
    
       
    
    
     
    
    
  //   // const Observable1 = rxjs.of(1, 2, 3);
    
  //   // // By calling subscribe method
  //   // Observable1.subscribe(next=>{
  //   //   console.log("A", next);
  //   // });
    
    
  //   // // By converting to Promise
  //   // (async()=>{
    
  //   //   const result = await Observable1.toPromise()
  //   //   console.log("B", result)
    
  //   // })()
    
    
    
    
    
    
  //     }

}
