import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {ProfileComponent} from "./components/profile/profile.component";

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },{
    path : 'signup',
    component:SignupComponent
  },{
    path:'profile',
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
