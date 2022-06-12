import { ActivatedRoute } from '@angular/router';
import { NewsService } from './../../api/news/news.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgwWowService } from 'ngx-wow';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  news:any;
  event:any;
  path:any = environment.path;
  user:any

  constructor(private http:HttpClient,private wowService: NgwWowService) { }

  ngOnInit(): void {  
    this.wowService.init();

    let Act = this.http.get("http://localhost:8000/api/actualites/");
    Act.subscribe((data)=>this.news=data);

    let Ev = this.http.get("http://localhost:8000/api/evenements/");
    Ev.subscribe((data)=>this.event=data);
  
  }
 

}
