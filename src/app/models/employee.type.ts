export class Employee{
  employee_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  hire_date: string;
  job_id: string;
  salary: number;
  commission_pct: number;
  
  constructor(){
      this.employee_id=0;
      this.first_name="";
      this.last_name="";
      this.email="";
      this.phone_number="";
      this.hire_date="";
      this.job_id="";
      this.salary=0;
      this.commission_pct=0;
  }
  
}