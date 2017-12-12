

import { Injectable } from '@angular/core';
import { IEmployee}from './IEmployee'

 
@Injectable()
export class EmployeeServiceComponent{
    getEmployee(): IEmployee[] {
        return [{ Age: 10, EmpCode : 1, Gender: 'Male', EmpName: 'durg', Salary: 1100 },
            { Age: 10, EmpCode: 2, Gender: 'Male', EmpName: 'durg', Salary: 1100 },
            { Age: 10, EmpCode: 3, Gender: 'Male', EmpName: 'durg', Salary: 1100 },]
    }
}