import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http:HttpClient) { }

   registerUser(data:any){

    const response =  this.http.post('http://localhost:8000/api/auth/register',data);
    console.log(response);
    return response;
   }

   loginUser(data:any){
    let parameters = new HttpHeaders();
    parameters = parameters.set('Authorization', "Bearer "+ localStorage.getItem('token'));

    return this.http.post('http://localhost:8000/api/auth/login',data, { headers: parameters });
   }
   getUser(){
    let parameters = new HttpHeaders();
    parameters = parameters.set('Authorization', "Bearer "+ localStorage.getItem('token'));
     return  this.http.get('http://localhost:8000/api/auth/profile',{headers:parameters});
   }
  update(name:string,cin:string,email:string,tel:any,adresse:string){
    let parameters = new HttpHeaders();
    parameters = parameters.set('Authorization', "Bearer "+ localStorage.getItem('token'));
    const data = {
      name:name,
      cin: cin,
      email:email,
      tel:tel,
      adresse:adresse
    }
    return  this.http.post('http://localhost:8000/api/auth/updateprofile',data,{headers:parameters});
  }
   isLoggedIn(){  
    return localStorage.getItem('token');
    }

    forget(email: string){
      return this.http.post('http://localhost:8000/api/auth/forgot',{email:email});
    }

    changePassword(old_password:string,new_password:string,confirm_password:string){
      let parameters = new HttpHeaders();
      parameters = parameters.set('Authorization', "Bearer "+ localStorage.getItem('token'));
      const data = {
        old_password:old_password,
        new_password: new_password,
        confirm_password:confirm_password
      }
      return this.http.post('http://localhost:8000/api/auth/change',data,{headers:parameters  })

    }

    reset(token:string,password:string,password_confirmation:string){
      const data={
        token:token,
        password:password,
        password_confirmation:password_confirmation
      }
      return this.http.post('http://localhost:8000/api/auth/reset',data)
    }

    
  }
