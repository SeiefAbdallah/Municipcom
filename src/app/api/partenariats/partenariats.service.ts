import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartenariatsService {

  constructor(private http:HttpClient) { }
  getData(){
    let url = "http://localhost:8000/api/partenariats/";  
    return this.http.get(url);
 }
}
