import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {

  selectedType: any;
  form: FormGroup;
  user:any;  
  
  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required ],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      birthDate: ['', Validators.required],

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
      email: [response.email, Validators.email],
      firstName: [response.firstName, Validators.required],
      lastName: [response.lastName, Validators.required ],
      address: [response.address, Validators.required],
      phone: [response.phoneNumber, Validators.required],
      birthDate: [response.userType, Validators.required],
    });
  });  
  
   }


  ngOnInit(): void {
  }

  onSubmit() {
    this.api.editProfile({
      id: this.user.id,
      email: this.form.get('email')?.value,
      firstName: this.form.get('firstName')?.value,
      lastName: this.form.get('lastName')?.value,
      address: this.form.get('address')?.value,
      phone: this.form.get('phoneNumber')?.value,
      birthDate: this.form.get('userType')?.value,
    }).subscribe((response: any) => {
      this.router.navigate(['/user-home-page']);
    })
  }
}
