import { Chart,registerables } from "../../node_modules/chart.js";
 import { PdiService } from './services/pdi.service';
 import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardHelper{
    nombres;
    nombres3
    communes
    result
    myChart
  

    constructor(private pdiService: PdiService) { 
    }
  populateDashboardCommune(){
  
    (async()=>{
    
       this.result = await this.pdiService.getResourceAll('communes1').toPromise()
        this.nombres = new Array(this.result.length)
      for (let i = 0; i < this.result.length; i++) {
        (async()=>{
    
      const result = await  this.pdiService.getResourceAll('communes/'+this.result[i].id+'/projets').toPromise()
     
    
    })()
        this.pdiService.getResourceAll('communes/'+this.result[i].id+'/projets').subscribe(result2=>{
        
         
           if(result2['_embedded'].projets.length==0){
            this.nombres[i]=null
           }
              else{
                this.nombres[i] = result2['_embedded'].projets.length
              }
       
        if(i==this.result.length-1)
      
         this.nombres3 =  this.nombres.slice(0,this.nombres.length)
         if(this.myChart!=null)
         this.myChart.destroy()
         var data2= this.nombres.slice(0,this.nombres.length);
         var labesl2 = this.communes
      //    for (let i = 0; i <= data2.length; i++){
      //     if (data2[i] === null) {
      //         data2.splice(i, 1);
      //         labesl2.splice(i, 1);
      //         i--;
      //     }
      // }
          this.myChart = new Chart("myChart", {
          type: 'bar',
          
          data: {
            
              labels: labesl2,
              
              datasets: [{
                  label: 'Répartition par commune',
               
                  data: data2,
                  
                  backgroundColor: 
                      'rgb(46,139,87)',
                  borderColor: 
                      'rgb(46,139,87)',
    
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
    
      this.communes = new Array(this.result.length)
    
     for (let i = 0; i < this.communes.length; i++) {
       delete this.result['id']
       this.communes[i] =  this.result[i].commune
    
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