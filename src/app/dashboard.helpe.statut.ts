import { Chart,registerables } from "chart.js";
 import { PdiService } from './services/pdi.service';
 import { Injectable } from '@angular/core';
 import ChartDataLabels from 'chartjs-plugin-datalabels';
@Injectable({
  providedIn: 'root'
})
export class DashboardHelperStatut{
    nombres;
    nombres3
    statuts
    result
    myChart
  

    constructor(private pdiService: PdiService) { 
    }
  populateDashboardStatut(){
    // Chart.register(ChartDataLabels);
    (async()=>{
    
       this.result = await this.pdiService.getResourceAll('statuts1').toPromise()
       console.log(this.result,"aaaaaaaaaaaaaaaaaaa")
        this.nombres = new Array(this.result.length)
      for (let i = 0; i < this.result.length; i++) {
        (async()=>{
    
      const result = await  this.pdiService.getResourceAll('statuts/'+this.result[i].id+'/projets').toPromise()
      console.log("B", result)
    
    })()
        this.pdiService.getResourceAll('statuts/'+this.result[i].id+'/projets').subscribe(result2=>{
          console.log(this.result[i].id,"wwwwwwwwwwwwwwwwwwwwww")
           console.log(result2['_embedded'].projets.length,"ùùùùùùùùùù") 
         
          
                this.nombres[i] = result2['_embedded'].projets.length
             
       
        if(i==this.result.length-1)
      
         this.nombres3 =  this.nombres.slice(0,this.nombres.length)
         if(this.myChart!=null)
         this.myChart.destroy()
         console.log(this.nombres,"popopopo")
         var data2= this.nombres.slice(0,this.nombres.length);
         var labesl2 = this.statuts
     console.log(this.statuts,"ssssssssssssssssssssssssssssssss")
          this.myChart = new Chart("myChartStatut", {
          type: 'pie',
          // plugins: [ChartDataLabels],
          data: {
            
              labels: labesl2,
              
              datasets: [{
                  label: 'Répartition par statut',
               
                  data: data2,
                  
                  backgroundColor: 
                  [
                    'rgba(255,255,0)',
                    'rgb(255,0,255)',
                    'rgb(255,0,0)',
                    'rgb(128,128,128)',
                    'rgb(0,255,255)',
                    'rgb(0,204,102)',
                    'rgb(0,128,128)',
                    'rgb(160,160,160)',
                    'rgb(0,0,255)',
                    'rgb(25,51,0)',
                    'rgb(128,128,0)',
                    'rgb(204,102,0)'
                ],
                  borderColor: 
                  [
                    'rgba(255,255,0.1)',
                    'rgb(255,0,255)',
                    'rgb(255,0,0)',
                    'rgb(128,128,128)',
                    'rgb(0,255,255)',
                    'rgb(0,204,102)',
                    'rgb(0,128,128)',
                    'rgb(160,160,160)',
                    'rgb(0,0,255)',
                    'rgb(25,51,0)',
                    'rgb(128,128,0)',
                    'rgb(204,102,0)'
                ]
    
                  // borderWidth: 1
              }]
          },
          options: {
            responsive: false,
          }
          
    //       options: {
    // skipNull: true,
    //           scales: {
    //               y: {
    //                   beginAtZero: true
    //               }
    //           },
    //           plugins:{
              
               
    //             legend:{
    //               display: false
    //             }
    //           }
    //       }
        });
        Chart.defaults.set('plugins.datalabels', {
          color: '#FE777B',
          font: {
            size: '30px'
          }
        });
       console.log(this.nombres3)
          })    
          
      }
    
      this.statuts = new Array(this.result.length)
      console.log(this.statuts,"tttttttttttttttttttttttttttttttttttt")
    
     for (let i = 0; i < this.statuts.length; i++) {
       delete this.result['id']
       this.statuts[i] =  this.result[i].statut
    
     }
    
    
     
    
    })()
    
    
    
    
    
    
    
    
    
    
       
    
    
     
    
    
    // const Observable1 = rxjs.of(1, 2, 3);
    
    // // By calling subscribe method
    // Observable1.subscribe(next=>{
    //   console.log("A", next);
    // });
    
    
    // // By converting to Promise
    // (async()=>{
    
    //   const result = await Observable1.toPromise()
    //   console.log("B", result)
    
    // })()
    
    
    
    
    
}
      }