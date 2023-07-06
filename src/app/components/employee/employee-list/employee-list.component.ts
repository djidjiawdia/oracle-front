import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.type';
import {EmployeeService} from 'src/app/services/employee.service';
import { Router, Routes } from '@angular/router';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent {
  employees: Employee[]|undefined;
  
  constructor(private employeeService: EmployeeService,
    private router:Router) {}


    ngOnInit(): void {
      this.getEmployee();
  }


  getEmployee() {
    this.employeeService.getClientsList().subscribe((data) => this.employees=data);  
  }
}
