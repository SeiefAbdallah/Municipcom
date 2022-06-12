import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http:HttpClient) { }
  
  comment(data:any){
  const response =  this.http.post('http://localhost:8000/api/comments/post',data);
  return response;
}}
