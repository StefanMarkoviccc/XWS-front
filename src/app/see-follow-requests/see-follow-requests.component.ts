
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-see-follow-requests',
  templateUrl: './see-follow-requests.component.html',
  styleUrls: ['./see-follow-requests.component.scss']
})
export class SeeFollowRequestsComponent implements OnInit {

  form: FormGroup
  userFollows: any
  user: any;
  users: any;
  

  constructor(private formBuilder: FormBuilder, private api : ApiService, private activatedRoute: ActivatedRoute, private router: Router) 
  {
    this.user = api.getUserFromLocalstorage();
    this.users = [];
  }

  ngOnInit(): void {
    this.api.getFollowRequests({id: this.user.id}).subscribe((response: any) => {
      console.log(response)
      this.userFollows = response;
    });

    this.api.getAllUsers().subscribe((response: any) => {
      console.log(response);
      this.users = response;
    })
  }


  approve(userFollowId : number) {

    this.api.approveFollow(userFollowId);

  }

  reject(userFollowId : number) {

    this.api.rejectFollow(userFollowId);

  }

  getUser(id: any) {

    for(let user of this.users) {
      if(user.id == id) {
        console.log(user)
        return user;
      }
    }

    return null;
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

