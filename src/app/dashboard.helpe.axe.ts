import { Chart,registerables } from "chart.js";
 import { PdiService } from './services/pdi.service';
 import { Injectable } from '@angular/core';
 import ChartDataLabels from 'chartjs-plugin-datalabels';
@Injectable({
  providedIn: 'root'
})
export class DashboardHelperAxe{
    nombres;
    nombres3
    axes
    result
    myChart
  

    constructor(private pdiService: PdiService) { 
      // Chart.register(ChartDataLabels);
    }
  populateDashboardAxe(){
  
    (async()=>{
    
       this.result = await this.pdiService.getResourceAll('axes1').toPromise()
        this.nombres = new Array(this.result.length)
      for (let i = 0; i < this.result.length; i++) {
        (async()=>{
    
      const result = await  this.pdiService.getResourceAll('axes/'+this.result[i].id+'/projets').toPromise()
      console.log("B", result)
    
    })()
        this.pdiService.getResourceAll('axes/'+this.result[i].id+'/projets').subscribe(result2=>{
          console.log(this.result[i].id,"wwwwwwwwwwwwwwwwwwwwww")
           console.log(result2['_embedded'].projets.length,"ùùùùùùùùùù") 
         
          
                this.nombres[i] = result2['_embedded'].projets.length
             
       
        if(i==this.result.length-1)
      
         this.nombres3 =  this.nombres.slice(0,this.nombres.length)
         if(this.myChart!=null)
         this.myChart.destroy()
         console.log(this.nombres,"popopopo")
         var data2= this.nombres.slice(0,this.nombres.length);
         var labesl2 = this.axes
     
          this.myChart = new Chart("myChartAxe", {
          type: 'bar',
          
          data: {
            
              labels: labesl2,
              
              datasets: [{
                  label: 'Répartition par axe',
               
                  data: data2,
                  
                  backgroundColor: 
                      'rgb(255,165,0)',
                  borderColor: 
                      'rgb(255,165,0)',
    
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
       console.log(this.nombres3)
          })    
          
      }
    
      this.axes = new Array(this.result.length)
    
     for (let i = 0; i < this.axes.length; i++) {
       delete this.result['id']
       this.axes[i] =  this.result[i].axe
    
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