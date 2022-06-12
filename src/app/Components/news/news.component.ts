import { NewsService } from './../../api/news/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    news:any;
    id:any;
  data: any;
  path:any = environment.path;

  
  constructor(private http:HttpClient,private route:ActivatedRoute,private newsService:NewsService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getOne();
  }
 
  getOne(){
    this.newsService.getDataById(this.id).subscribe(data=>{
      this.data=data;    
    })
  }
}
