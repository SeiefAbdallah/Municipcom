import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
 
  constructor(private http:HttpClient) 
  { 
    
    }
    getData(){
      let url = "http://localhost:8000/api/actualites/";
      return this.http.get(url);
   }
   getDataById(id: string){
    return this.http.get("http://localhost:8000/api/actualite/"+id).pipe(map(res =>{
      return res;
    }))
 }
}
