import { Chart,registerables } from "chart.js";
 import { PdiService } from './services/pdi.service';
 import { Injectable } from '@angular/core';
 import ChartDataLabels from 'chartjs-plugin-datalabels';
@Injectable({
  providedIn: 'root'
})
export class DashboardHelperEtude{
    nombres;
    nombres3
    situationEtudes
    result
    myChart
  

    constructor(private pdiService: PdiService) { 
      // Chart.register(ChartDataLabels);
    }
  populateDashboardEtude(){
  
    (async()=>{
    
       this.result = await this.pdiService.getResourceAll('situationEtudes1').toPromise()
        this.nombres = new Array(this.result.length)
      for (let i = 0; i < this.result.length; i++) {
        (async()=>{
    
      const result = await  this.pdiService.getResourceAll('situationEtudes/'+this.result[i].id+'/projets').toPromise()
  
    
    })()
        this.pdiService.getResourceAll('situationEtudes/'+this.result[i].id+'/projets').subscribe(result2=>{
       
         
          
                this.nombres[i] = result2['_embedded'].projets.length
             
       
        if(i==this.result.length-1)
      
         this.nombres3 =  this.nombres.slice(0,this.nombres.length)
         if(this.myChart!=null)
         this.myChart.destroy()
       
         var data2= this.nombres.slice(0,this.nombres.length);
         var labesl2 = this.situationEtudes
     
          this.myChart = new Chart("myChartEtude", {
          type: 'pie',
          
          data: {
            
              labels: labesl2,
              
              datasets: [{
                  label: 'Répartition par situationEtude',
               
                  data: data2,
                  
                  backgroundColor: [
                  'rgba(255,255,0.1)',
                  'rgb(255,0,255)',
                  'rgb(255,0,0)',
                  'rgb(128,128,128)',
                  'rgb(0,255,255)',
                  'rgb(0,255,0)',
                 ],
                  borderColor:  [
                    'rgba(255,255,0.1)',
                    'rgb(255,0,255)',
                    'rgb(255,0,0)',
                    'rgb(128,128,128)',
                    'rgb(0,255,255)',
                    'rgb(0,255,0)',
                   ],
                     
    
                  borderWidth: 1
              }]
          },
          options: {
            responsive: false,
          }
       });
 
          })    
          
      }
 
      this.situationEtudes = new Array(this.result.length)
    
     for (let i = 0; i < this.situationEtudes.length; i++) {
       delete this.result['id']
       this.situationEtudes[i] =  this.result[i].situation
    
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