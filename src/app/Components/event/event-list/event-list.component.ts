import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/api/events/event.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
event:any
path:any = environment.path;
id:any
dataOne:any

  constructor(private http:HttpClient,private eventService:EventService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let url1 = this.http.get("http://localhost:8000/api/evenements/");
    url1.subscribe((data)=>this.event=data);    
  }
  getOne(){
    this.eventService.getDataById(this.id).subscribe((data: any)=>{
      this.dataOne=data;
      console.log(this.dataOne);
      
      
    })
  }
}
