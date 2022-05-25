import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJobffersComponent } from './create-job-offers/create-jobffers.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { JobHomePageComponent } from './job-home-page/job-home-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SetEducationAndExperienceComponent } from './set-education-and-experience/set-education-and-experience.component';
import { SetInterestAndSkillsComponent } from './set-interest-and-skills/set-interest-and-skills.component';
import { UnregisteredHomePageComponent } from './unregistered-home-page/unregistered-home-page.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';

const routes: Routes = [

  {path: 'job-home-page', component: JobHomePageComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'user-home-page', component: UserHomePageComponent},
  {path: 'login', component:LoginComponent},
  {path: 'unregistered-home-page', component:UnregisteredHomePageComponent},
  {path: 'edit-profile', component:EditProfileComponent},
  {path: 'set-education-and-experience', component:SetEducationAndExperienceComponent},
  {path: 'set-interest-and-skills', component:SetInterestAndSkillsComponent},
  {path: 'create-job-offers', component:CreateJobffersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
