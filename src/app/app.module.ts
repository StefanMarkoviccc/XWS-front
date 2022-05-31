import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
//import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobHomePageComponent } from './job-home-page/job-home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { LoginComponent } from './login/login.component';
import { PublishPostComponent } from './publish-post/publish-post.component';
import { UnregisteredHomePageComponent } from './unregistered-home-page/unregistered-home-page.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SetEducationAndExperienceComponent } from './set-education-and-experience/set-education-and-experience.component';
import { SetInterestAndSkillsComponent } from './set-interest-and-skills/set-interest-and-skills.component';
import { CreateJobffersComponent } from './create-job-offers/create-jobffers.component';
import { SeeFollowRequestsComponent } from './see-follow-requests/see-follow-requests.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    JobHomePageComponent,
    RegistrationComponent,
    UserHomePageComponent,
    LoginComponent,
    PublishPostComponent,
    UnregisteredHomePageComponent,
    EditProfileComponent,
    SetEducationAndExperienceComponent,
    SetInterestAndSkillsComponent,
    CreateJobffersComponent,
    SeeFollowRequestsComponent,
    ViewProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    HttpClientModule,
    CommonModule,
    MatFormFieldModule,
    //NgbModalModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
