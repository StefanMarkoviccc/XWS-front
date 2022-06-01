import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.scss']
})
export class ViewJobsComponent implements OnInit {

  form: FormGroup
  id: any
  job: any;
  jobs: any;

  constructor(private formBuilder: FormBuilder, private api : ApiService, private activatedRoute: ActivatedRoute, private router: Router) 
  {

    this.form = this.formBuilder.group({
      search: ['']
    }); 
  }

  ngOnInit(): void {
    this.api.getAllJobs().subscribe((response: any) => {
      this.jobs = response;
    })
  }

  onSubmit() {
    this.api.getAllJobs();
  }

}
