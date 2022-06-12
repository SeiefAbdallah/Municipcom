import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthentificationService } from 'src/app/api/auth/authentification.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  constructor(private route:ActivatedRoute,private auth: AuthentificationService,private toast:ToastrService) { }
  formBuilder: any;
  form: UntypedFormGroup = new UntypedFormGroup({
    old_password: new UntypedFormControl(''),
    new_password: new UntypedFormControl(''),   
    confirm_password: new UntypedFormControl(''),         
  });
 
  submitted=false
  ngOnInit(): void {
    this.route.queryParams.subscribe((param : any) =>{
      console.log(param)
    })
  }
  createForm(){
    this.form = this.formBuilder.group(
      {
        old_password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
           
          ],
      
        ],    
        new_password: [
          '',
            Validators.required,
            Validators.minLength(6),
        ],
        confirm_password: ['', 
        Validators.required
      ],
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
    const old_password = this.form.value.old_password;
    const new_password = this.form.value.new_password;
    const password_confirmation = this.form.value.confirm_password;
    let formdata = new FormData();
    formdata.append('old_password',old_password);
    formdata.append('new_password',new_password);
    formdata.append('password_confirmation',password_confirmation);


    this.auth.changePassword( old_password,new_password,password_confirmation).subscribe((res:any) =>{
      console.log(res);
      this.toast.success(JSON.stringify(res));
    },(err)=>{
      this.toast.error("Invalid Credentials");
      console.log(err);
      
    });
    // this.auth.update
  }

}
