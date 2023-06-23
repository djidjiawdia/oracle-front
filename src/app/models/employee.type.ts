import { Department } from './department.type';
import { Job } from './job.type';

export type Employee = {
  employee_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  hire_date: Date;
  job: Job;
  salary: number;
  commission_pct: number;
  manager?: Employee;
  department: Department;
};
