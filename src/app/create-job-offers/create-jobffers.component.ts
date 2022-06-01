import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-jobffers',
  templateUrl: './create-jobffers.component.html',
  styleUrls: ['./create-jobffers.component.scss']
})
export class CreateJobffersComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
    this.form = this.formBuilder.group({
      jobDescription: ['',Validators.required],
      jobPosition: ['',Validators.required],
      jobConditions: ['',Validators.required],
     });
   }

  ngOnInit(): void {
  }

  onSubmit() {

    this.api.createJobOffers({
      jobDescription: this.form.get('jobDescription')?.value,
      jobPosition: this.form.get('jobPosition')?.value,
      jobConditions: this.form.get('jobConditions')?.value,
    }).subscribe((response: any) => {
      this.router.navigate(['/user-home-page']);
    })
  }

  navigate(data : any){
    if(data === 'edit'){
      this.router.navigate(['/edit-profile']);
    }

    else if(data === 'education'){
      this.router.navigate(['/set-education-and-experience']);
    }
    else if(data === 'interest'){
      this.router.navigate(['/set-interest-and-skills']);
    }
    else if(data === 'requests'){
      this.router.navigate(['/see-follow-requests']);
    }
    else if(data === 'job'){
      this.router.navigate(['/view-jobs']);
    }
    else if(data === 'home'){
      this.router.navigate(['/user-home-page']);
    }
  }

}
