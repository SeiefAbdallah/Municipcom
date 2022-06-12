import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-circonscription',
  templateUrl: './circonscription.component.html',
  styleUrls: ['./circonscription.component.css']
})
export class CirconscriptionComponent implements OnInit {
circ:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let url1 = this.http.get("http://localhost:8000/api/circonscriptions/");
    url1.subscribe((data)=>this.circ=data);  
 
    

  }

}
