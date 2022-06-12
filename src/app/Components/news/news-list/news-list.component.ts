import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
    news:any
    path:any = environment.path;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let url1 = this.http.get("http://localhost:8000/api/actualites/");
    url1.subscribe((data)=>this.news=data);    
  }

}
