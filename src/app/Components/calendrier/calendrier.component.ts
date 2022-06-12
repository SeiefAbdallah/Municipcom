import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {

  session:any
  reunion:any 
  day = (new Date()).getDay();

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let url1 = this.http.get("http://localhost:8000/api/seances/");
    url1.subscribe((data)=>this.session=data);  
    let url2 = this.http.get("http://localhost:8000/api/reunions/");
    url2.subscribe((data)=>{
      this.reunion=data
    });
  }

}
