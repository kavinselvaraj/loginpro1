import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ContactComponent} from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import{AuthGuard} from './auth.guard';
import { AddPostComponent } from './add-post/add-post.component';
export enum Role {
  User = 'user',
  Admin = 'admin'
}
const routes: Routes = [
  {
  path:'',
  redirectTo:'login',
  pathMatch:'full'
},
{
  path:'signup',
  component:SignupComponent,
  canActivate: [AuthGuard]
},
{
  path:'login',
  component:LoginComponent,
  canActivate: [AuthGuard]
},
{
  path:'dashboard',
  component:DashboardComponent,
  canActivate: [AuthGuard]
},
{
  path:'post',
  component:AddPostComponent,
  canActivate: [AuthGuard] 
},
{
  path:'news',
  component:NewsComponent,
  canActivate: [AuthGuard] 
},
{
  path:'contact',component:ContactComponent,
  canActivate: [AuthGuard], 
  data: { roles: [Role.Admin]
  } 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
