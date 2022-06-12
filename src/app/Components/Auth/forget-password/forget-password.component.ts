import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/api/auth/authentification.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, NgForm, Validators, UntypedFormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  constructor(private data:AuthentificationService,private formBuilder:UntypedFormBuilder,private router :Router,private toast:ToastrService) { }
  form: UntypedFormGroup = new UntypedFormGroup({
    email: new UntypedFormControl(''),   
  });
    submitted = false;
    error={
      email:null
          };
    message:any;
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
      }
    );
  }
  onSubmit(): void {
    this.submitted = true;
    this.data.forget(this.form.value.email).subscribe((res:any) =>{   
    this.message = res.message;
    this.toast.success("email successfully sent");
    this.router.navigate(['reset-password']);      
    },(err=>{
     this.toast.error('Erreur');
      console.log(err);
    }))
  }
}
