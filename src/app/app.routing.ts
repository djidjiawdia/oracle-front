import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegionComponent } from './components/region/region.component';
import { LocationComponent } from './components/location/location.component';
import { DepartmentComponent } from './components/department/department.component';
import { JobComponent } from './components/job/job.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';
import { CountryComponent } from './components/country/country.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'regions', component: RegionComponent },
  { path: 'countries', component: CountryComponent },
  { path: 'locations', component: LocationComponent },
  { path: 'departments', component: DepartmentComponent },
  { path: 'jobs', component: JobComponent },
  {
    path: 'employees',
    component: EmployeeComponent,
    children: [
      {
        path: '',
        component: EmployeeListComponent,
      },
      { path: 'new', component: EmployeeCreateComponent },
    ],
  },
];
