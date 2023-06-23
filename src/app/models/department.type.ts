import { Employee } from './employee.type';

export type Department = {
  department_id: number;
  department_name: string;
  manager: Employee;
  location: Location;
};
