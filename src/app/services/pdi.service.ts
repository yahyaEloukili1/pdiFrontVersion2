import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Axe } from '../models/Axe';
import { Commune } from '../models/Communes';
import { MO } from '../models/MO';
import { Projet } from '../models/Projet';
import { Province } from '../models/Province';
import { Secteur } from '../models/Secteur';
import { SituationEtude } from '../models/SituationEtude';
import { Statut } from '../models/Statut';
import { TauxAvancement } from '../models/TauxAvancement';

@Injectable({
  providedIn: 'root'
})
export class PdiService {

  
  host= 'http://localhost:8081'
   jwtToken = null;
  constructor(private http: HttpClient) { }

  getResourceAll(resource: String):Observable<Province[]>{
    if(this.jwtToken ==null)
    this.loadToken()
    return this.http.get<Province[]>(`${this.host}/${resource}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
  getResource(resource: String,page:number,size:number):Observable<Province[]>{ if(this.jwtToken ==null)
    this.loadToken()
      return this.http.get<Province[]>(`${this.host}/${resource}?page=${page}&size=${size}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  getResourceMO(resource: String,page:number,size:number):Observable<MO[]>{ if(this.jwtToken ==null)
    this.loadToken()
    return this.http.get<MO[]>(`${this.host}/${resource}?page=${page}&size=${size}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceProjet(resource: String,page:number,size:number):Observable<Projet[]>{ if(this.jwtToken ==null){

  this.loadToken()
  console.log(this.jwtToken+"ppppppppppppppppppp")}
  return this.http.get<Projet[]>(`${this.host}/${resource}?page=${page}&size=${size}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceAxe(resource: String,page:number,size:number):Observable<Axe[]>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Axe[]>(`${this.host}/${resource}?page=${page}&size=${size}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceStatut(resource: String,page:number,size:number):Observable<Statut[]>{ if(this.jwtToken ==null){
  this.loadToken()}
  return this.http.get<Statut[]>(`${this.host}/${resource}?page=${page}&size=${size}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceCommune(resource: String,page:number,size:number):Observable<Commune[]>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Commune[]>(`${this.host}/${resource}?page=${page}&size=${size}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceSecteur(resource: String,page:number,size:number):Observable<Secteur[]>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Secteur[]>(`${this.host}/${resource}?page=${page}&size=${size}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceCommuneAll(resource: String):Observable<Commune[]>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Commune[]>(`${this.host}/${resource}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceProjetAll(resource: String):Observable<Projet[]>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Projet[]>(`${this.host}/${resource}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceStatutAll(resource: String):Observable<Statut[]>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Statut[]>(`${this.host}/${resource}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceProvinceAll(resource: String):Observable<Province[]>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Province[]>(`${this.host}/${resource}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceTauxAvancementAll(resource: String):Observable<TauxAvancement[]>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<TauxAvancement[]>(`${this.host}/${resource}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceSituaionEtudeAll(resource: String):Observable<SituationEtude[]>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<SituationEtude[]>(`${this.host}/${resource}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceAxeAll(resource: String):Observable<Axe[]>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Axe[]>(`${this.host}/${resource}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceSecteurAll(resource: String):Observable<Secteur[]>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Secteur[]>(`${this.host}/${resource}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceMOAll(resource: String):Observable<MO[]>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<MO[]>(`${this.host}/${resource}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
  addResource(resource: string,value:any):Observable<Province>{ if(this.jwtToken ==null)
    this.loadToken()
    return this.http.post<Province>(`${this.host}/${resource}`,value,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
addResourceMO(resource: string,value:any):Observable<MO>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.post<MO>(`${this.host}/${resource}`,value,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
addResourceCommune(resource: string,value:any):Observable<Commune>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.post<Commune>(`${this.host}/${resource}`,value,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
addResourceCommune2(resource: string,value:any):Observable<Commune>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.post<Commune>(`${this.host}/${resource}`,value,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
addResourceStatut(resource: string,value:any):Observable<Statut>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.post<Statut>(`${this.host}/${resource}`,value,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
addResourceSecteur(resource: string,value:any):Observable<Secteur>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.post<Secteur>(`${this.host}/${resource}`,value,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
  getResourceByKeyword(resource: String,page:number,size:number,mc:string):Observable<Province[]>{ if(this.jwtToken ==null)
    this.loadToken()
    return this.http.get<Province[]>(`${this.host}/${resource}/search/byProvincePage?mc=${mc}&page=${page}&size=${size}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceByKeywordSecteur(resource: String,page:number,size:number,mc:string):Observable<Secteur[]>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Secteur[]>(`${this.host}/${resource}/search/bySecteurPage?mc=${mc}&page=${page}&size=${size}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceByKeywordSecteur2(resource: String,size:number,mc:string):Observable<Secteur[]>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Secteur[]>(`${this.host}/${resource}/search/bySecteurPage?mc=${mc}&size=${size}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceByKeywordMO(resource: String,page:number,size:number,mc:string):Observable<MO[]>{ if(this.jwtToken ==null)
  this.loadToken()
  console.log(`${this.host}/${resource}/search/byMaitreOuvragePage?mc=${mc}&page=${page}&size=${size}`)
  return this.http.get<MO[]>(`${this.host}/${resource}/search/byMaitreOuvragePage?mc=${mc}&page=${page}&size=${size}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceByKeywordMO2(resource: String,size:number,mc:string):Observable<MO[]>{ if(this.jwtToken ==null)
  this.loadToken()

  return this.http.get<MO[]>(`${this.host}/${resource}/search/byMaitreOuvragePage?mc=${mc}&size=${size}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceByKeywordProjet(resource: String,page:number,size:number,mc:string):Observable<Projet[]>{ if(this.jwtToken ==null)
  this.loadToken()

  return this.http.get<Projet[]>(`${this.host}/${resource}/search/byProjetPage?mc=${mc}&page=${page}&size=${size}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceByKeywordCommune(resource: String,page:number,size:number,mc:string):Observable<Commune[]>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Commune[]>(`${this.host}/${resource}/search/byCommunePage?mc=${mc}&page=${page}&size=${size}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceByKeywordCommune2(resource: String,size:number,mc:string):Observable<Commune[]>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Commune[]>(`${this.host}/${resource}/search/byCommunePage?mc=${mc}&size=${size}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceByKeywordAxe(resource: String,page:number,size:number,mc:string):Observable<Axe[]>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Axe[]>(`${this.host}/${resource}/search/byAxePage?mc=${mc}&page=${page}&size=${size}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceByKeywordAxe2(resource: String,size:number,mc:string):Observable<Axe[]>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Axe[]>(`${this.host}/${resource}/search/byAxePage?mc=${mc}&size=${size}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getResourceByKeywordStatut(resource: String,page:number,size:number,mc:string):Observable<Statut[]>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Statut[]>(`${this.host}/${resource}/search/byStatutPage?mc=${mc}&page=${page}&size=${size}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
deleteResource(resource:string,url:string){ if(this.jwtToken ==null)
  this.loadToken()
 return this.http.delete(url,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
}
getOneResource(url:string):Observable<Province>{ if(this.jwtToken ==null)
  this.loadToken()
 return this.http.get<Province>(url,{headers: new HttpHeaders({'Authorization': this.jwtToken})})
}
getOneResourceById(resource:string,id:number):Observable<Province>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Province>(`${this.host}/${resource}/${id}`,{headers: new HttpHeaders({'Authorization': this.jwtToken})})
 }

getOneResourceMO(url:string):Observable<MO>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<MO>(url,{headers: new HttpHeaders({'Authorization': this.jwtToken})})
 }
 getOneResourceSituation(url:string):Observable<SituationEtude>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<SituationEtude>(url,{headers: new HttpHeaders({'Authorization': this.jwtToken})})
 }
 getOneResourceAxe(url:string):Observable<Axe>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Axe>(url,{headers: new HttpHeaders({'Authorization': this.jwtToken})})
 }
 getOneResourceSecteur(url:string):Observable<Secteur>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Secteur>(url,{headers: new HttpHeaders({'Authorization': this.jwtToken})})
 }
 getOneResourceProjet(url:string):Observable<Projet>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Projet>(url,{headers: new HttpHeaders({'Authorization': this.jwtToken})})
 }
 getOneResourceCommune(url:string):Observable<Commune>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Commune>(url,{headers: new HttpHeaders({'Authorization': this.jwtToken})})
 }
 getOneResourceStatut(url:string):Observable<Statut>{ if(this.jwtToken ==null)
  this.loadToken()
  return this.http.get<Statut>(url,{headers: new HttpHeaders({'Authorization': this.jwtToken})})
 }
 getOneResourcetaux(url:string):Observable<TauxAvancement>{ if(this.jwtToken ==null)
  this.loadToken()
   let a = 4;
  return this.http.get<TauxAvancement>(url,{headers: new HttpHeaders({'Authorization': this.jwtToken})}) 

 }
updateResource(url:string,data:any){ if(this.jwtToken ==null)
  this.loadToken()
  console.log(url)
  return this.http.patch(url,data,{headers: new HttpHeaders({'Authorization': this.jwtToken})})
 }
 login(user){ 
   return this.http.post(this.host+"/login",user,{observe: 'response'})
 }

 saveToken(jwt){
   localStorage.setItem('token',jwt);
 }
 loadToken(){
   this.jwtToken = localStorage.getItem('token');
   return this.jwtToken
 }
 logout(){
   this.jwtToken = null
   localStorage.removeItem('token')

 }
 loggedIn(){
   return !!localStorage.getItem('token')
 }
}
