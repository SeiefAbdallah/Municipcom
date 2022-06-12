import { AuthentificationService } from 'src/app/api/auth/authentification.service';
import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private auth: AuthentificationService, private router: Router,private toast:ToastrService){}
  canActivate() {
    if(  this.auth.isLoggedIn()){
      return true;
    }
    this.toast.error('You Are Not logged In ');
    this.router.navigate(['login']);
    return false;
  }
  
}
