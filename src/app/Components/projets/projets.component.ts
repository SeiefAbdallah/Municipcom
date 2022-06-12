import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {NgbActiveModal, NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projets ngbd-modal-content',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
 projet:any;
 path:any = environment.path;
  constructor(private http:HttpClient,config: NgbModalConfig, private modalService: NgbModal,private toast:ToastrService) { 
    config.backdrop = 'static';
    config.keyboard = false;
    config.animation = true
    config.fullscreen=true
    config.size=""
  }

  loggedIn(){
    return localStorage.getItem('token');  
  }
  ngOnInit(): void {
    let url1 = this.http.get("http://localhost:8000/api/projets/");
    url1.subscribe((data)=>this.projet=data);    
    
  }
  open(content: any) {
    this.modalService.open(content);
  }
  clickEvent() {
    return Swal.fire({
      text:   "Merci pour votre vote !.",
      icon: 'success'
    });
  }

}


