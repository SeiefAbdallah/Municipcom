import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReunionsService {

  constructor(private http:HttpClient) { }
  getData(){
    let url = "http://localhost:8000/api/reunions/";  
    return this.http.get(url);
 }
}
