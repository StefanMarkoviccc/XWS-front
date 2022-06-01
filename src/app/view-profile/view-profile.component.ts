
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  form: FormGroup
  id: any
  posts: any;
  user: any;
  

  constructor(private formBuilder: FormBuilder, private api : ApiService, private activatedRoute: ActivatedRoute, private router: Router) 
  {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    

    
  }

  ngOnInit(): void {

    this.api.getUserPosts({
      id:  this.id
    }).subscribe((response: any) => {
      this.posts = response;
    })
  
    this.api.getUser({
      id: parseInt(this.id)
    }).subscribe((response: any) => {
      this.user = response;
    })

    console.log(this.user);

  }


}


