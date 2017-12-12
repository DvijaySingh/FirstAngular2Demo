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
var Employee_Service_1 = require("./Employee.Service");
var Employee_1 = require("./Employee");
var EmployeeListComponet = (function () {
    function EmployeeListComponet(_empService) {
        this._empService = _empService;
        this.EmpCode = 23;
        this.EmpName = 'durgv';
        this.Age = 12;
        this.Salary = 13243;
        this.Gender = 'Male';
        //this.employees = _empService.getEmployee();
    }
    //employees:any[]  = [
    //    { Age: 10, code: 1, Gender: 'Male', Name: 'durg', Salary: 1100 },
    //    { Age: 10, code: 2, Gender: 'Male', Name: 'durg', Salary: 1100 },
    //    { Age: 10, code: 3, Gender: 'Male', Name: 'durg', Salary: 1100 },
    //];
    EmployeeListComponet.prototype.ngOnInit = function () {
        var _this = this;
        this._empService.getEmployee()
            .subscribe(function (empdata) { return _this.employees = empdata; });
    };
    EmployeeListComponet.prototype.addEmployee = function () {
        this._empService.AddEmployee(new Employee_1.Employee(this.EmpCode, this.EmpName, this.Age, this.Salary, this.Gender))
            .subscribe(function (response) {
            console.log(response);
        });
    };
    return EmployeeListComponet;
}());
EmployeeListComponet = __decorate([
    core_1.Component({
        templateUrl: 'app/Employee/EmployeeList.html',
        styleUrls: ['app/CSS/Employee.css'],
    }),
    __metadata("design:paramtypes", [Employee_Service_1.EmployeeService])
], EmployeeListComponet);
exports.EmployeeListComponet = EmployeeListComponet;
//# sourceMappingURL=EployeeList.js.map