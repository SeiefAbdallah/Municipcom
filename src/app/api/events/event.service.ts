import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  getData(){
    let url = "http://localhost:8000/api/evenements/";
    return this.http.get(url);
 }
 getDataById(id: string){
  return this.http.get("http://localhost:8000/api/evenements/"+id).pipe(map(res =>{
    return res;
  }))
}
}
