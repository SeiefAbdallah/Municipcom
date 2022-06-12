import { ToastrService } from 'ngx-toastr';
import { AuthentificationService } from 'src/app/api/auth/authentification.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  formBuilder: any;
  constructor(private route:ActivatedRoute,private auth: AuthentificationService,private toast:ToastrService,private router:Router){}
  form: UntypedFormGroup = new UntypedFormGroup({
    password: new UntypedFormControl(''),   
    confirmPassword: new UntypedFormControl(''),         
  });
  token :any;
  message :any;
  submitted=false
ngOnInit(): void {
     this.route.queryParams.subscribe((param : any) =>{
       console.log(param)
      this.token = param.token;       
     })
  }
  createForm(){
    this.form = this.formBuilder.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
           
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      
    );
  } 
  get f(){
    return this.form.controls;
  }
  
  onSubmit():void{
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    const password = this.form.value.password;
    const password_confirmation = this.form.value.confirmPassword;
    let formdata = new FormData();
    formdata.append('password',password);
    formdata.append('password_confirmation',password_confirmation);
    formdata.append('token',this.token);


    this.auth.reset(this.token,password,password_confirmation).subscribe((res:any) =>{
      this.toast.success(JSON.stringify(res));
      this.router.navigate(['login']);
    },(err)=>{
      this.toast.error("Invalid Credentials");
    });
  }


}
