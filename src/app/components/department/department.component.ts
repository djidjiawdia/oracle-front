import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Department } from 'src/app/models/department.type';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
  deps: Department[]|undefined;
  
  constructor(private depService: DepartmentService,
    private router:Router) {}


    ngOnInit(): void {
      this.getDepartments();
  }


  getDepartments() {
    this.depService.getDepartments().subscribe((data) => this.deps=data);  
  }
}
