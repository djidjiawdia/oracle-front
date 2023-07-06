import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Department } from 'src/app/models/department.type';
import { Employee } from 'src/app/models/employee.type';
import { Job } from 'src/app/models/job.type';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})
export class EmployeeCreateComponent implements OnInit {
  employeeForm: FormGroup = new FormGroup({
    first_name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
    ]),
    last_name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone_number: new FormControl('', [Validators.required]),
    hire_date: new FormControl(null, [Validators.required]),
    job: new FormControl(null, [Validators.required]),
    salary: new FormControl(null, [Validators.required]),
    commission_pct: new FormControl(),
    manager: new FormControl(),
    department: new FormControl(null, [Validators.required]),
  });

  employee: any;
  departments$: Observable<Department[]>;
  managers$: Observable<Employee[]>;

  constructor(
    private _empService: EmployeeService,
    private _jobService: JobService,
    private _depService: DepartmentService,
    private _router: Router,
    private employeeService:EmployeeService
  ) {this.employeeService.getClientsList().subscribe((data)=>
    this.employee=data)}

  ngOnInit(): void {
    // this.jobs$ = this._jobService.getJobs();
    // this.departments$ = this._depService.getDepartments();
    // this.managers$ = this._empService.getEmployees();
  }

  // onAddEmployee(): void {
  //   if (this.employeeForm.invalid) {
  //     return;
  //   }
  //   this._empService
  //     .createEmployee(this.employeeForm.value)
  //     .subscribe((res) => {
  //       this.goBack();
  //     });
  // }

  // goBack(): void {
  //   this._router.navigate(['/employees']);
  // }

  onAddEmployee(data:any){
    console.warn(data)
  this.employeeService.createEmployee(data).subscribe((result)=>{console.warn()}) }
}
