import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.type';
import { environment } from 'src/environments/environment.local';


@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  // private apiUrl = 'http://localhost:8080/java-backend/api/iam/master1/employees'; 

  constructor(private httpClient:HttpClient) {
  }
  
  getClientsList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${environment.apiUrl}/employees/listEmployee`)
  }



  createEmployee(data:any){
    return this.httpClient.post(
      `${environment.apiUrl}/employees/createemployee`,
      data
    );
  }

 
  updateEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(
      `${environment.apiUrl}/${employee.employee_id}`,
      employee
    );
  }
}
