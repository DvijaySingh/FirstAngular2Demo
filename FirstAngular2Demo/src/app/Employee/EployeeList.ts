
import { Component, OnInit } from '@angular/core';
import { IEmployee } from './IEmployee';
import { EmployeeService } from './Employee.Service';
import { Employee } from './Employee'

@Component({
     
    templateUrl: 'app/Employee/EmployeeList.html',
    styleUrls: ['app/CSS/Employee.css'],
    
})

export class EmployeeListComponet implements OnInit {

    employees: IEmployee[];
    EmpCode: number=23;
    EmpName: string='durgv';
    Age: number=12;
    Salary: number=13243;
    Gender: string= 'Male';
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
                console.log(response);
            });
    }
}