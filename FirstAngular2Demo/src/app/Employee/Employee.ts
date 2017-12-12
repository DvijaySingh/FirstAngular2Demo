

import { IEmployee} from './IEmployee'

export class Employee implements IEmployee {


    constructor(public EmpCode: number, public EmpName: string, public Age: number, public Salary: number, public Gender: string)
    { }
}