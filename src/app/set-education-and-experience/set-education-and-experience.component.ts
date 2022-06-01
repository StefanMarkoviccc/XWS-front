import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-set-education-and-experience',
  templateUrl: './set-education-and-experience.component.html',
  styleUrls: ['./set-education-and-experience.component.scss']
})
export class SetEducationAndExperienceComponent implements OnInit {

  selectedType: any;
  form: FormGroup;
  user:any;  
  
  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
    this.form = this.formBuilder.group({
      education: ['', Validators.required]
    });

    let jsonUser = localStorage.getItem('user');

    if(jsonUser) {
      this.user = JSON.parse(jsonUser);
    }

    if(!this.user) {
      return;
    }

    this.api.getUser({id:this.user.id}).subscribe((response: any) => {

      console.log(response);

      this.form = this.formBuilder.group({
      education: [response.education, Validators.required]
    });
  });  
  
   }


  ngOnInit(): void {
  }

  onSubmit() {
    this.api.editProfile({
      id: this.user.id,
      education: this.form.get('education')?.value
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
