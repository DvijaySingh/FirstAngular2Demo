import { Injectable } from '@angular/core';
import { IEmployee } from './IEmployee';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
 
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

    constructor(private _http: Http)
    {

    }

    getEmployee():  Observable<IEmployee[]> {
        return this._http.get("http://localhost:52827/api/Employee")
        .map((response:Response)=><IEmployee[]>response.json())
    }
    getEmployeeByCode(empCode:string): Observable<IEmployee> {
        return this._http.get("http://localhost:52827/api/Employee/" + empCode)
            .map((response: Response) => <IEmployee>response.json())
    }
    AddEmployee(employee: IEmployee): Observable<IEmployee[]> {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let EmpCode = employee.EmpCode;
        let EmpName = employee.EmpName;
        let Age = employee.Age;
        let Gender = employee.Gender;
        let Salary = employee.Salary;
        //let body = this.serializeObj(employee);
        let options = new RequestOptions({ headers: headers });
        return this._http.post("http://localhost:52827/api/Employee",employee.EmpName, options)
            .map((response: Response) => <IEmployee[]>response.json())
        
    }
    private serializeObj(obj:any) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

        return result.join("&");
    }

    //getEmployee(): IEmployee[] {
    //    return [{ Age: 10, code: 1, Gender: 'Male', Name: 'durg', Salary: 1100 },
    //    { Age: 10, code: 2, Gender: 'Male', Name: 'durg', Salary: 1100 },
    //    { Age: 10, code: 3, Gender: 'Male', Name: 'durg', Salary: 1100 },]
    //}
}
 

