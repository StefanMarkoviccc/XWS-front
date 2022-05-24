import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.scss']
})
export class UserHomePageComponent implements OnInit {

  form: FormGroup
  profiles: any
  posts: any;

  constructor(private formBuilder: FormBuilder, private api : ApiService) 
  {
    this.form = this.formBuilder.group({
      search: ['']
    });   
  }

  ngOnInit(): void {
    this.getPublicProfiles();
  }

  getUserPublicPosts(){

    this.api.getUserPublicPosts().subscribe((response: any) => {
      this.posts = response;
  });
}

  getPublicProfiles() {

    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''

    this.api.getPublicProfiles({search: search}).subscribe((response: any) => {
      this.profiles = response;
    })
  }

  onSubmit() {
    this.getPublicProfiles();
  }

}
