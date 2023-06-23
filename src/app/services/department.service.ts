import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../models/department.type';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private _http: HttpClient) {}

  getDepartments(): Observable<Department[]> {
    return this._http.get<Department[]>(
      `${environment.apiUrl}/departments/listDepartments`
    );
  }
}
