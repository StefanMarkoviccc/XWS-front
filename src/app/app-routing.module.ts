import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobHomePageComponent } from './job-home-page/job-home-page.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [

  {path: 'job-home-page', component: JobHomePageComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
