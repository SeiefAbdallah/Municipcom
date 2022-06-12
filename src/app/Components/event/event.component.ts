import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/api/events/event.service';  
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  event:any;
  path:any = environment.path;
  id: any;
  data: any;
  
  constructor(private http:HttpClient,private eventService:EventService,private route:ActivatedRoute) { }
  ngOnInit(): void {
    let url1 = this.http.get("http://localhost:8000/api/evenements/");
  url1.subscribe((data)=>this.event=data);
  this.id=this.route.snapshot.params['id'];
  this.getOne();
  }
  
  getOne(){
    this.eventService.getDataById(this.id).subscribe((data: any)=>{
      this.data=data;  
    })
  }
}

