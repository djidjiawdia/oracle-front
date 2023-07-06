import { Component } from '@angular/core';
import { Job } from 'src/app/models/job.type';
import { JobService } from 'src/app/services/job.service';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {
  jobs: Job[]|undefined;
  
  constructor(private jobService: JobService,
    private router:Router) {}


    ngOnInit(): void {
      this.getJob();
  }


  getJob() {
    this.jobService.getJobsList().subscribe((data) => this.jobs=data);  
  }
}
