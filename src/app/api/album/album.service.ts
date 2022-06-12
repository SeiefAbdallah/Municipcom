import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http:HttpClient) { }
  getData(){
    let url = "http://localhost:8000/api/album/";
    return this.http.get(url);
 }
}
