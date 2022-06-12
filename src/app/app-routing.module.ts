
import { AssociationComponent } from './Components/association/association.component';
import { CirconscriptionComponent } from './Components/circonscription/circonscription.component';
import { ForgetPasswordComponent } from './Components/Auth/forget-password/forget-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './Components/Auth/login/login.component';
import { ProjetsComponent } from './Components/projets/projets.component';
import { ContactComponent } from './Components/contact/contact.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { SignupComponent } from './Components/Auth/signup/signup.component';
import { ServiceComponent } from './Components/service/service.component';
import { EventComponent } from './Components/event/event.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NewsComponent } from './Components/news/news.component';
import { AuthGuard } from './guard/auth.guard';
import { NewsListComponent } from './components/news/news-list/news-list.component';
import { AboutComponent } from './components/about/about.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { EventListComponent } from './components/event/event-list/event-list.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ComingsoonComponent } from './components/comingsoon/comingsoon/comingsoon.component';
import { ProjetSingleComponent } from './components/projets/projet-single/projet-single.component';


const routes: Routes = [
  // Home Route
  {
    path: '',
    redirectTo: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  // Login Route
  {
    path: 'login',
    component: LoginComponent,
  },

  // register route
  {
    path: 'signup',
    component: SignupComponent,
  },

// news list route
  {
    path: 'newss',
    component: NewsListComponent,
  },

  // news single route
  {
    path: 'news/:id',
    component: NewsComponent,
  },

  // events list route
  {
    path: 'events',
    component: EventListComponent,
  },

  // event single route
  {
    path: 'event/:id',
    component: EventComponent,
  },
 
// footer route
  {
    path: 'footer',
    component: FooterComponent,
  },


// projects route
  {
    path: 'projet',
    component: ProjetsComponent,
    
  },
  // single project route
  {
    path: 'projetsn/:id',
    component: ProjetSingleComponent,
  },


  // contact route
  {
    path: 'contact',
    component: ContactComponent,
  },

  // serivce route
  {
    path: 'service',
    component: ServiceComponent,
    canActivate: [AuthGuard],
  },

  // gallery route
  {
    path: 'gallery',
    component: GalleryComponent,
  },

  // forget password route
  {
    path: 'forgetPassword',
    component: ForgetPasswordComponent,
  },

    // reset password route
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },

  // profile route
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [],
  },

  // Edit profile route
  {
    path:'edit',
    component:ProfileEditComponent,
  },

// about route
  {
    path: 'about',
    component: AboutComponent,
  },

  // calendar route
  {
    path: 'calendrier',
    component: CalendrierComponent,
    canActivate: [AuthGuard],
  },

  // circonscription route
  {
    path: 'circ',
    component: CirconscriptionComponent,
  },

  // associations route
  {
    path: 'association',
    component: AssociationComponent,
  },

  // coming-soon route
  {
    path: 'soon',
    component: ComingsoonComponent,
  },

  // not found route
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
