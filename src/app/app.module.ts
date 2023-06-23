import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegionComponent } from './components/region/region.component';
import { LocationComponent } from './components/location/location.component';
import { DepartmentComponent } from './components/department/department.component';
import { JobComponent } from './components/job/job.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';
import { CountryComponent } from './components/country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegionComponent,
    LocationComponent,
    DepartmentComponent,
    JobComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    CountryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
