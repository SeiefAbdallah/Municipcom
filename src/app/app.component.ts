import { NewsService } from './api/news/news.service';
import { Component } from '@angular/core';

import { EventService } from './api/events/event.service';
import { AuthentificationService } from './api/auth/authentification.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(){

  }
}
