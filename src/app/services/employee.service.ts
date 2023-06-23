import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.local';
import { Employee } from '../models/employee.type';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private static EMP_URL = environment.apiUrl + '/employees';

  constructor(private _http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this._http.get<Employee[]>(
      `${EmployeeService.EMP_URL}/listEmployee`
    );
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this._http.post<Employee>(
      `${EmployeeService.EMP_URL}/createEmployee`,
      employee
    );
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this._http.put<Employee>(
      `${EmployeeService.EMP_URL}/${employee.employee_id}`,
      employee
    );
  }
}
