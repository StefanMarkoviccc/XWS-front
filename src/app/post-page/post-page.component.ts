import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  form: FormGroup
  content : any;
  user: any;
  base64Output: string;
  postIdString : any;
  postId: any;
  post: any;
  comments: any[] = [];
  reactions: any[] = [];
  users: any;
  displayedColumnsComments: string[] = ['Name', 'Content'];
  displayedColumnsReactions: string[] = ['Name', 'Reaction'];
  private formSubmitAttempt = false;

  constructor(private formBuilder: FormBuilder,  private api: ApiService, private activatedRoute: ActivatedRoute,private router: Router) 
  {
    this.form = this.formBuilder.group({
      content: ['', Validators.required]
    });

    this.comments = [];
    this.reactions = [];
    this.users = [];

    this.activatedRoute.queryParams.subscribe(params => {
      this.postId = params['id'];
    });

  }

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if(!userString) {
      return;
    }

    this.user = JSON.parse(userString);
    this.load();

    this.api.getAllUsers().subscribe((response: any) => {
      this.users = response;
    })

    
  }

  load() {
    

    this.api.getPost({
        id: this.postId
    }).subscribe((response: any) => {
      this.post = response

        this.api.getAllPostComments({
          postId: this.postId
        }).subscribe((response: any) => {
          this.comments=response;
        })

        this.api.getAllReactionsByPost({
          postId: this.postId
        }).subscribe((response:any)=> {
            this.reactions=response;
        })
    })


  }

  userFunc(userId:any) : any {
    for(let user of this.users){
      if(user.id == userId){
        return user;
      }
    }

    return null;
  }

  Like(){
    this.api.react({
      userId : this.user.id,
      postId: this.postId,
      reactions : 0 

    }).subscribe((response:any)=> {
      this.load()
    })

  }

  Dislike(){
    this.api.react({
      userId : this.user.id,
      postId: this.postId,
      reactions : 1 

    }).subscribe((response:any)=> {
      this.load()
    })
  }


  onSubmit() {
    const userString = localStorage.getItem('user');

    if(!userString){
      return;
    }

    const user = JSON.parse(userString);
    this.formSubmitAttempt = false;
    if(this.form.valid){
      const content = this.form.get('content')?.value;

      this.api.comment({
        content : content,
        userId : this.user.id,
        postId : this.postId
      }).subscribe((response : any) =>{
        this.load()
      })
    }
    else{
      this.formSubmitAttempt = true;
    }
  }
}
