import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.scss']
})
export class UserHomePageComponent implements OnInit {

  form: FormGroup
  users: any;
  privateUsers: any;
  posts: any;
  userWhoFollow: any;
  followers: any;
  user: any;
  follower: any;

  constructor(private formBuilder: FormBuilder, private api : ApiService, private activatedRoute: ActivatedRoute, private router: Router) 
  {
    this.form = this.formBuilder.group({
      search: ['']
    });   

    this.user = api.getUserFromLocalstorage();


  this.api.getCurrentUser().subscribe((response: any) => {
    this.userWhoFollow = response;
});
  }

  ngOnInit(): void {
    this.getPublicProfiles();
    this.getAllUserFollowers();
  }

  getUserPublicPosts(){

    this.api.getUserPublicPosts().subscribe((response: any) => {
      this.posts = response;
  });
}

getUser(id: any) {

  for(let user of this.users) {
    if(user.id == id) {
      return user;
    }
  }

  return null;
}

getAllUserFollowers(){

  this.api.getAllUserFollowers({
    id: this.user.id
  }).subscribe((response : any) => {
    this.followers = response;
  })
}

  getPublicProfiles() {

    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''

    this.api.getPublicProfiles({search: search}).subscribe((response: any) => {
      this.users = response;
    })
  }

  follow(user: any) {

    this.api.follow({
      userId : user.id,
      userWhoFollowId : this.userWhoFollow.id
    }).subscribe((response: any) => {
     
      this.router.navigate(['/user-home-page']);
    })

  }

  onSubmit() {
    this.getPublicProfiles();
  }

}
