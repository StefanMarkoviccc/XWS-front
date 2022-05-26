
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
  

  constructor(private formBuilder: FormBuilder, private api : ApiService, private activatedRoute: ActivatedRoute, private router: Router) 
  {
    this.api.getCurrentUser().subscribe((response: any) => {
      this.user = response;
  });

  }

  ngOnInit(): void {
    this.api.getFollowRequests(this.user.id);
  }


  approve(userFollowId : number) {

    this.api.approveFollow(userFollowId);

  }

  reject(userFollowId : number) {

    this.api.rejectFollow(userFollowId);

  }
}

