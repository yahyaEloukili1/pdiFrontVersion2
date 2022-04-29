import { Chart,registerables } from "chart.js";
 import { PdiService } from './services/pdi.service';
 import { Injectable } from '@angular/core';
 import ChartDataLabels from 'chartjs-plugin-datalabels';
@Injectable({
  providedIn: 'root'
})
export class DashboardHelperTauxAvancement{
    nombres;
    nombres3
    tauxAvancements
    result
    myChart
  

    constructor(private pdiService: PdiService) { 
      // Chart.register(ChartDataLabels);
    }
  populateDashboardTauxAvancement(){
  
    (async()=>{
    
       this.result = await this.pdiService.getResourceAll('tauxAvancements1').toPromise()
        this.nombres = new Array(this.result.length)
      for (let i = 0; i < this.result.length; i++) {
        (async()=>{
    
      const result = await  this.pdiService.getResourceAll('tauxAvancements/'+this.result[i].id+'/projets').toPromise()
     
    
    })()
        this.pdiService.getResourceAll('tauxAvancements/'+this.result[i].id+'/projets').subscribe(result2=>{
 
         
          
                this.nombres[i] = result2['_embedded'].projets.length
             
       
        if(i==this.result.length-1)
      
         this.nombres3 =  this.nombres.slice(0,this.nombres.length)
         if(this.myChart!=null)
         this.myChart.destroy()
    
         var data2= this.nombres.slice(0,this.nombres.length);
         var labesl2 = this.tauxAvancements
     
          this.myChart = new Chart("myChartTaux", {
          type: 'bar',
          
          data: {
            
              labels: labesl2,
              
              datasets: [{
                  label: 'Répartition par tauxAvancement',
               
                  data: data2,
                  
                  backgroundColor: 
                      'rgba(255, 99, 132)',
                  borderColor: 
                      'rgba(255, 99, 132, 1)',
    
                  borderWidth: 1
              }]
          },
          options: {
          
              responsive: false,
            
    skipNull: true,
              scales: {
                  y: {
                      beginAtZero: true
                  }
              },
              plugins:{
              
               
                legend:{
                  display: false
                }
              }
          }
        });
  
          })    
          
      }
    
      this.tauxAvancements = new Array(this.result.length)
      console.log(this.tauxAvancements,"llllllllqqqqqqqqqqqq")
     for (let i = 0; i < this.tauxAvancements.length; i++) {
       delete this.result['id']
       this.tauxAvancements[i] =  this.result[i].tauxAvancement
    
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