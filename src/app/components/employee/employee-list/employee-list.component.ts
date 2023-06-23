import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.type';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent {
  employees: Employee[] = [];
}
