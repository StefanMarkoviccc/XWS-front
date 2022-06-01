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
<<<<<<< HEAD
  userIds: any;

=======
  followers: any;
  user: any;
  follower: any;
>>>>>>> dd6db34a32263026765d1844de789d8b4799cf52

  constructor(private formBuilder: FormBuilder, private api : ApiService, private activatedRoute: ActivatedRoute, private router: Router) 
  {
    this.form = this.formBuilder.group({
      search: ['']
    });   

    this.user = api.getUserFromLocalstorage();


  this.api.getCurrentUser().subscribe((response: any) => {
    this.userWhoFollow = response;
});

this.users = [];
  this.userIds= [];

  }

  ngOnInit(): void {
    this.getPublicProfiles();
<<<<<<< HEAD
    this.putInUserIds(this.users);
    this.getUserPublicPosts();
=======
    this.getAllUserFollowers();
>>>>>>> dd6db34a32263026765d1844de789d8b4799cf52
  }

  getUserPublicPosts(){

    this.api.getUserPublicPosts({
      userIds : this.userIds
    }).subscribe((response: any) => {
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

}
