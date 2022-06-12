import { Router } from '@angular/router';
import { AuthentificationService } from './../../../api/auth/authentification.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import Validation from '../utils/validation';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup = new FormGroup({
    cin: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    tel: new FormControl(''),  
    adresse:new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;
  data: any;

  constructor(
    private formBuilder: FormBuilder,
    private DataService: AuthentificationService,
    private toastr: ToastrService,
    private router: Router) { }

  createForm() {
    this.form = this.formBuilder.group(
      {
        cin: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
          ]
        ],
        name: ['', Validators.required],
        adresse:['',Validators.required],
        email: ['', [Validators.required, Validators.email]],
        tel: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
          ]
        ],
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
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  ngOnInit(): void { }

  get f() {
    return this.form.controls;
  }


  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    let formData = new FormData();
    formData.append('cin', this.form.value.cin);
    formData.append('name', this.form.value.name);
    formData.append('email', this.form.value.email);
    formData.append('tel', this.form.value.tel);
    formData.append('adresse', this.form.value.adresse);
    formData.append('password', this.form.value.password);
    formData.append('password_confirmation', this.form.value.confirmPassword);

    this.DataService.registerUser(formData).subscribe((res) => {
      this.data = res;
      if (this.data.status === 200) {
        console.log(this.data);

        this.router.navigate(['login']);
        Swal.fire({
          title: 'Hurray!!',
          text: "Inscription avec succées !.",
          icon: 'success'
        }); 

      }
    }, err => {
      console.log(err);
      Swal.fire({
        title: 'Oops !!',
        text: "Something went wrong! ",
        icon: 'error'
      });
    });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
