import { Injectable } from '@angular/core';
import { IEmployee } from './IEmployee';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
 
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    public headers: Headers;
    employeedata: IEmployee;
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

    DeleteEmployee (empCode: string): Observable<IEmployee> {
        return this._http.delete("http://localhost:52827/api/Employee/" + empCode)
            .map((response: Response) => <IEmployee>response.json())
    }
    AddEmployee(employee: IEmployee): Observable<any> {
        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        //let EmpCode = employee.EmpCode;
        //let EmpName = employee.EmpName;
        //let Age = employee.Age;
        //let Gender = employee.Gender;
        //let Salary = employee.Salary;
         

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
       
        let body = JSON.stringify(employee);
        return this._http.post("http://localhost:52827/api/Employee", body, { headers: headers })
            .map((response: Response) => response.json())           
        
    }
    updateEmployee(employee: IEmployee): Observable<any> {
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let body = JSON.stringify(employee);
        return this._http.put("http://localhost:52827/api/Employee/UpdateEmployee", body, { headers: headers })
            .map((response: Response) => response.json())

    }
    
}
 

