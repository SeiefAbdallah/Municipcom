import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  path:any = environment.path;
  photo:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let url1 = this.http.get("http://localhost:8000/api/album");
    url1.subscribe((data)=>this.photo=data);  
  }

}
