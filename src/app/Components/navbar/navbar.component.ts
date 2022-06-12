import {  ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private tost:ToastrService,private router:Router) { }

ngOnInit(): void {}



loggedIn(){
  return localStorage.getItem('token');  
}

onLogOut(){
  localStorage.removeItem('token');
  Swal.fire({
    title: 'Se Deconnectez !',
    icon: 'error'
  });
}


}
