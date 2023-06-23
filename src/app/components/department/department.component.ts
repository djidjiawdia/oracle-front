import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from 'src/app/models/department.type';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
  departments$: Observable<Department[]>;

  constructor(private _depService: DepartmentService) {}

  ngOnInit(): void {
    this.departments$ = this._depService.getDepartments();
  }
}
