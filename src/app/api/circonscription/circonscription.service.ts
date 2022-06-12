import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CirconscriptionService {

  constructor(private http: HttpClient) { }
  getData(){
    let url = "http://localhost:8000/api/circonscriptions/";
    return this.http.get(url);
 }
}
