import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
ImageData
@Injectable({
  providedIn: 'root'
})
export class ProjetsService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = "http://localhost:8000/api/projets/";  
    return this.http.get(url);
 }
 getDataById(id: string){
  return this.http.get("http://localhost:8000/api/projets/"+id).pipe(map(res =>{
    return res;
  }))
}
}

