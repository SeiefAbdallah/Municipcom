import { CirconscriptionComponent } from './Components/circonscription/circonscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";  
import { BarRatingModule } from "ngx-bar-rating";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { NewsComponent } from './Components/news/news.component';
import { ServiceComponent } from './Components/service/service.component';
import { EventComponent } from './Components/event/event.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { ProjetsComponent } from './Components/projets/projets.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { SignupComponent } from './Components/Auth/signup/signup.component';
import { GuideServiceComponent } from './Components/guide-service/guide-service.component';
import { ForgetPasswordComponent } from './Components/Auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EventListComponent } from './components/event/event-list/event-list.component';
import { NewsListComponent } from './components/news/news-list/news-list.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { AboutComponent } from './components/about/about.component';
import { ComingsoonComponent } from './components/comingsoon/comingsoon/comingsoon.component';
import { ProjetSingleComponent } from './components/projets/projet-single/projet-single.component';
  
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    NewsComponent,
    ServiceComponent,
    EventComponent,
    NavbarComponent,
    ProjetsComponent,
    ContactComponent,
    GalleryComponent,
    HomeComponent,
    GuideServiceComponent,
    SignupComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ProfileComponent,
    ProfileEditComponent,
    NotfoundComponent,
    EventListComponent,
    NewsListComponent,
    CalendrierComponent,
    AboutComponent,
    CirconscriptionComponent,
    ComingsoonComponent,
    ProjetSingleComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    BarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 

}
