import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
    //Mail user form start
      mailForm: UntypedFormGroup = new UntypedFormGroup({
      firstname: new UntypedFormControl(''),
      email: new UntypedFormControl(''),
      textquery: new UntypedFormControl('')
    });

submitted = false;
constructor(private http: HttpClient, private formBuilder: UntypedFormBuilder){}
//Mail user form actions
get f() { return this.mailForm.controls; }
  
  onSubmit() {
  this.submitted = true;
  // stop here if form is invalid
  if (this.mailForm.invalid) {
      return;
  }
  //True if all the fields are filled
 
    // Initialize Params Object
     var myFormData = new FormData();
   // Begin assigning parameters
      myFormData.append('myUsername', this.mailForm.value.firstname);
      myFormData.append('myEmail', this.mailForm.value.email);
      myFormData.append('textquery', this.mailForm.value.textquery);
    //post request
    return this.http.post('http://localhost:8000/api/sendMail'
    , myFormData).subscribe((res) => {
        console.log(res);
        //sweetalert message popup
        Swal.fire({
        title: 'Hurray!!',
        text:   "Mail has been send successfully.",
        icon: 'success'
      });    
  }, err =>{
    console.log(err);
    Swal.fire({
      title: 'Oops !!',
      text:   "Something went wrong! ",
      icon: 'error'
    });    });
  
 
}
ngOnInit() {
  //Mail User form validations
  this.mailForm = this.formBuilder.group({
  email: ['', [Validators.required, Validators.email]],
  firstname: ['', [Validators.required]],
  textquery:['', [Validators.required]]
  });
}
  }
