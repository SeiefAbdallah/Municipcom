import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService } from 'src/app/api/auth/authentification.service';
import { UserService } from 'src/app/api/user/user.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 data:any;
 path:any = environment.path;
 formBuilder: any;
 form: FormGroup = new FormGroup({
   name: new FormControl(''),
   cin: new FormControl(''),   
   email: new FormControl(''),   
   tel: new FormControl(''),
   adresse: new FormControl('')      
 });

 submitted=false
  constructor(private route:ActivatedRoute,private auth:AuthentificationService,private toast:ToastrService) { }


  ngOnInit(): void {
    this.auth.getUser().subscribe(data=>{
      this.data=data;
      console.log(this.data);
  })
  }
  createForm(){
    this.form = this.formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
          ],
      
        ],    
        cin: [
          '',
            Validators.required,
        ],
        email: ['', 
        Validators.required,Validators.email
      ],
      tel: ['',Validators.min(8)],
      adresse: ['',Validators.required]
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
    const name = this.form.value.name;
    const cin = this.form.value.cin;
    const email = this.form.value.email;
    const tel = this.form.value.tel;
    const adresse = this.form.value.adresse;

    let formdata = new FormData();
    formdata.append('name',name);
    formdata.append('cin',cin);
    formdata.append('email',email);
    formdata.append('tel',tel);
    formdata.append('adresse',adresse);



    this.auth.update( name,cin,email,tel,adresse).subscribe((res:any) =>{
      console.log(res);
      this.toast.success(JSON.stringify(res));
    },(err)=>{
      this.toast.error("Invalid Credentials");
      console.log(err);
      
    });
    // this.auth.update
  }
}
