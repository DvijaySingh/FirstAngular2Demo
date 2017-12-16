
import { Component, OnInit } from '@angular/core';
import { IEmployee } from './IEmployee';
import { EmployeeService } from './Employee.Service';
import { Employee } from './Employee';
//import { Router, ActivatedRoute } from '@angular/router';
    
@Component({
     
    templateUrl: 'app/Employee/EmployeeList.html',
    styleUrls: ['app/CSS/Employee.css'],
    
})

export class EmployeeListComponet implements OnInit {
    
    employees: IEmployee[];
    employeeData: IEmployee;
    EmpCode: number;
    EmpName: string;
    Age: number;
    Salary: number;
    Gender: string;

    constructor(private _empService: EmployeeService) {
        //this.employees = _empService.getEmployee();
    }
    //employees:any[]  = [
    //    { Age: 10, code: 1, Gender: 'Male', Name: 'durg', Salary: 1100 },
    //    { Age: 10, code: 2, Gender: 'Male', Name: 'durg', Salary: 1100 },
    //    { Age: 10, code: 3, Gender: 'Male', Name: 'durg', Salary: 1100 },
    //];

    ngOnInit() {
        this._empService.getEmployee()
            .subscribe((empdata) => this.employees = empdata);
         
    }
    addEmployee() {
        this._empService.AddEmployee(new Employee(this.EmpCode, this.EmpName, this.Age,this.Salary,this.Gender))
            .subscribe((response) => {
                location.reload();
            });
    }
    getEmployee(EmpCode: string)
    {
        this._empService.getEmployeeByCode(EmpCode).subscribe(
            (empdata) => this.employeeData = empdata 

        )
       
        //this._empService.getEmployeeByCode(EmpCode).subscribe((empdata) => this.employeeData = empdata);
        //console.log(this.employeeData);
        //this.EmpName = this.employeeData.EmpName;
    }
    DeleteEmployee(EmpCode: string) {
        this._empService.DeleteEmployee(EmpCode).subscribe((empdata) => this.employeeData = empdata);
        location.reload();
    }
    UpdateEmployee()
    {
        this._empService.updateEmployee(new Employee(this.EmpCode, this.EmpName, this.Age, this.Salary, this.Gender))
            .subscribe((response) => {
                location.reload();
            });
    }
    //GetEmployee(emplo)
}