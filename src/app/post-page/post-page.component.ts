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


  constructor(private formBuilder: FormBuilder,  private api: ApiService, private activatedRoute: ActivatedRoute,private router: Router) 
  {
    this.form = this.formBuilder.group({
      search: [''],
      content: ['', Validators.required],
      link: [''],

    });
  }

  ngOnInit(): void {
    this.api.getCurrentUser().subscribe((response: any) => {
      localStorage.setItem('user', JSON.stringify(response));
      content: this.form.get('content')?.value

      this.user = response;

    });
  }
  onSubmit() {
    this.api.publishPost({
      content: this.form.get('content')?.value,
      link: this.form.get('link')?.value,
      image: this.base64Output,
      userID: this.user.id,
    }).subscribe((response: any) => {
      this.router.navigate(['/user-home-page']);
    })
  }
}
