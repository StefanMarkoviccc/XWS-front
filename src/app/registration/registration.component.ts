import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  selectedType: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) 
  {
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required ],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {

    console.log('Test', this.selectedType);

      this.api.userRegistration({
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
        posswordConformation : this.form.get('passwordConformation')?.value,
        firstName: this.form.get('firstName')?.value,
        lastName: this.form.get('lastName')?.value,
        address: this.form.get('address')?.value,
        city: this.form.get('city')?.value,
        country: this.form.get('country')?.value,
        phoneNumber: this.form.get('phoneNumber')?.value,
        description: this.form.get('description')?.value,
        }).subscribe((response: any) => {
        this.router.navigate(['/home']);
      })
    }
  }
