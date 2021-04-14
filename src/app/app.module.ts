import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule}  from '@angular/common/http';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { MessagesComponent } from './messages/messages.component';
import { EducationComponent } from './education/education.component';
import { MyclassComponent } from './myclass/myclass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignComponent,
    CoursedetailsComponent,
    MessagesComponent,
    EducationComponent,
    MyclassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
