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
  userIds: any;
  followers: any;
  user: any;
  follower: any;
  thisUserId : any;

  constructor(private formBuilder: FormBuilder, private api : ApiService, private activatedRoute: ActivatedRoute, private router: Router) 
  {
    this.form = this.formBuilder.group({
      search: ['']
    });   

    this.user = api.getUserFromLocalstorage();
    this.thisUserId = this.user.id;


  this.api.getCurrentUser().subscribe((response: any) => {
    this.userWhoFollow = response;
});

this.users = [];
  this.userIds= [];

  }

  ngOnInit(): void {
    this.getPublicProfiles();
    this.putInUserIds(this.users);
    this.getAllUserFollowers();

    this.api.getUserPosts({
      id:  this.user.id
    }).subscribe((response: any) => {
      this.posts = response;
    })
  }

  getUserPublicPosts(){

    this.api.getUserPublicPosts({
      userIds : this.userIds
    }).subscribe((response: any) => {
      this.posts = response;
  });
}

createPost() {
  this.router.navigate(['/publish-post']);
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

  putInUserIds(users: any)
  {
    for(let user of users){
      this.userIds.add(user.id);
    }
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
