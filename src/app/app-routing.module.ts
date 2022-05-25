import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobHomePageComponent } from './job-home-page/job-home-page.component';
import { LoginComponent } from './login/login.component';
import { PublishPostComponent } from './publish-post/publish-post.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';

const routes: Routes = [

  {path: 'job-home-page', component: JobHomePageComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'user-home-page', component: UserHomePageComponent},
  {path: 'login', component:LoginComponent},
  {path: 'publish-post', component:PublishPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
