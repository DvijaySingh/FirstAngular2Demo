import { Component,OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { EmployeeService } from './Employee.Service'
import {IEmployee}from './IEmployee'
@Component({
    selector: 'empdetails',
    templateUrl: 'app/Employee/EmployeeDetails.html',
    providers: [EmployeeService]
})

export class EmployeeDetailsComponent implements OnInit {
    private employee: IEmployee;
    constructor(private _empServive: EmployeeService, private _activatedRoute: ActivatedRoute) { }
    ngOnInit(): void {
        let empcode: string = this._activatedRoute.snapshot.params['EmpCode']
        this._empServive.getEmployeeByCode(empcode).subscribe(
            (empdata) => this.employee = empdata,
            (Error)=>console.log(Error)
        )
    }
}