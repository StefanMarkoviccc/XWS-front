import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

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
    this.getAllJobs();
  }

  onSubmit() {
    this.getAllJobs();
  }


  getAllJobs() {
      let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''


      this.api.getAllJobs({search: search}).subscribe((response: any) => {
        this.jobs = response;
      })
      console.log(search);

      
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

  create() {
    this.router.navigate(['/create-job-offers']);
  }

}
