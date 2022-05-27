import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-publish-post',
  templateUrl: './publish-post.component.html',
  styleUrls: ['./publish-post.component.scss']
})
export class PublishPostComponent implements OnInit {

  form: FormGroup
  content : any;
  user: any;
  base64Output: string;
  onFileSelected(event:any){
    this.convertFile(event.target.files[0]).subscribe(base64 => {
    this.base64Output = base64;
   });
  }

  convertFile(file: File) : Observable<string> {
      const result = new ReplaySubject<string>(1);
      const reader = new FileReader();
      reader.readAsBinaryString(file);

      reader.onload = (event) => result.next(btoa(event.target?.result ? event.target.result.toString() : ''));

      return result;
  } 


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
