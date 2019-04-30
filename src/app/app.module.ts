import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {SignupService} from './signup.service';
import {LoginService} from './login.service';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import {AuthGuard} from './auth.guard';
import { AddPostComponent } from './add-post/add-post.component';
import {ImageUploadService} from './image-upload.service';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    ShowHidePasswordModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SignupService,LoginService,AuthGuard,ImageUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
