import { CommentaireService } from './../../../api/commentaire/commentaire.service';
import { ProjetsService } from './../../../api/projets/projets.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projet-single',
  templateUrl: './projet-single.component.html',
  styleUrls: ['./projet-single.component.css']
})
export class ProjetSingleComponent implements OnInit {

  form: UntypedFormGroup = new UntypedFormGroup({
    Body: new UntypedFormControl(''),
  }); 
  formBuilder: any;

  constructor(private http:HttpClient,private route:ActivatedRoute,private projet:ProjetsService,private com: CommentaireService) { }
  id:any;
  data: any;
  path:any = environment.path;
  submitted = false;
  com1:any;
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getOne();
    let url1 = this.http.get("http://localhost:8000/api/commentaires/");
    url1.subscribe((data)=>this.com1=data); 
  }
  getOne(){
    this.projet.getDataById(this.id).subscribe(data=>{
      this.data=data;
    })
  }
  createForm(){
    this.form = this.formBuilder.group(
      { 
        Body: [
          '',
          [
            Validators.required,
            Validators.maxLength(255)
          ]
        ],
      
      });
      }

      get f(){
        return this.form.controls;
      }


      onSubmit(): void {
        this.submitted = true;
    
        if (this.form.invalid) {
          return;
        }
      
        let formData = new FormData();
        formData.append('Body',this.form.value.Body);
          this.com.comment(formData).subscribe((res)=>{  
            Swal.fire({
              title: 'Hurray!!',
              text:   "Comment has been send successfully.",
              icon: 'success'
            });  
          });

          } 
          
}
