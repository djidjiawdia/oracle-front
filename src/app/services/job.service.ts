import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../models/job.type';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private _http: HttpClient) {}

  getJobsList(): Observable<Job[]> {
    return this._http.get<Job[]>(`${environment.apiUrl}/jobs/listJobs`);
  }
}
