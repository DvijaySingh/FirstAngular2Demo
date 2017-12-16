"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
require("rxjs/add/operator/map");
var EmployeeService = (function () {
    function EmployeeService(_http) {
        this._http = _http;
    }
    EmployeeService.prototype.getEmployee = function () {
        return this._http.get("http://localhost:52827/api/Employee")
            .map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.getEmployeeByCode = function (empCode) {
        return this._http.get("http://localhost:52827/api/Employee/" + empCode)
            .map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.DeleteEmployee = function (empCode) {
        return this._http.delete("http://localhost:52827/api/Employee/" + empCode)
            .map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.AddEmployee = function (employee) {
        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        //let EmpCode = employee.EmpCode;
        //let EmpName = employee.EmpName;
        //let Age = employee.Age;
        //let Gender = employee.Gender;
        //let Salary = employee.Salary;
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        var body = JSON.stringify(employee);
        return this._http.post("http://localhost:52827/api/Employee", body, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        var body = JSON.stringify(employee);
        return this._http.put("http://localhost:52827/api/Employee/UpdateEmployee", body, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=Employee.Service.js.map