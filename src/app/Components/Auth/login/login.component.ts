import { NgxSpinnerService } from "ngx-spinner";  
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthentificationService } from 'src/app/api/auth/authentification.service';
import Swal from "sweetalert2";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
hide = true;

  form: UntypedFormGroup = new UntypedFormGroup({
    email: new UntypedFormControl(''),
    password: new UntypedFormControl(''),
   
  });
  submitted = false;
  data:any;
  token:any;
  constructor(
    private spinner:NgxSpinnerService,
    private router:Router, 
    private formBuilder: UntypedFormBuilder,
    private http:HttpClient,
    private toast:ToastrService,
    private auth:AuthentificationService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
          ]
        ]}
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    let formData = new FormData();
    formData.append('email',this.form.value.email);
    formData.append('password',this.form.value.password);

    this.auth.loginUser(formData).subscribe(res =>{
        this.data=res;

        if(this.data.status === 201){
          this.token = this.data.token;
          localStorage.setItem('token',this.token);
          console.log(this.data);
          
          this.router.navigate(['']);
          Swal.fire({
            title: 'Hurray!!',
            text:   "Connecté avec succées !.",
            icon: 'success'
          });

        }
    }, err =>{
      console.log(err);      
      Swal.fire({
        title: 'Oops !!',
        text:   "Something went wrong! ",
        icon: 'error'
      });    });
  }
  

 

}
