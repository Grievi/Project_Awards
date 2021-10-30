import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SignupComponent} from './components/signup/signup.component'
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo:'/main', pathMatch:'full'},
  { path: 'main', component:MainComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'projects', component: ProjectsComponent},
  { path:'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
