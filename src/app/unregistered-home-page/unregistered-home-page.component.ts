
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-unregistered-home-page',
  templateUrl: './unregistered-home-page.component.html',
  styleUrls: ['./unregistered-home-page.component.scss']
})
export class UnregisteredHomePageComponent implements OnInit {

  form: FormGroup
  users: any
  posts: any;
  

  constructor(private formBuilder: FormBuilder, private api : ApiService, private activatedRoute: ActivatedRoute, private router: Router) 
  {
    this.form = this.formBuilder.group({
      search: ['']
    });  
    
    
  }

  ngOnInit(): void {
    this.getPublicProfiles();
  }


  getPublicProfiles() {

    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''

    this.api.getPublicProfiles({search: search}).subscribe((response: any) => {
      this.users = response;
    })
  }

  navigate(data : any){
    if(data === 'login'){
      this.router.navigate(['/login']);
    }

    else if(data === 'registration'){
      this.router.navigate(['/registration']);
    }
    
  }


  onSubmit() {
    this.getPublicProfiles();
  }
}
