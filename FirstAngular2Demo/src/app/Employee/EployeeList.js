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
var Gender_1 = require("../Gender");
var Employee_Service_1 = require("./Employee.Service");
var Employee_1 = require("./Employee");
//import { Router, ActivatedRoute } from '@angular/router';
var EmployeeListComponet = (function () {
    function EmployeeListComponet(_empService) {
        this._empService = _empService;
        this.selectedGender = new Gender_1.Gender(1, 'Male');
        this.Allgender = [
            new Gender_1.Gender(1, 'Male'),
            new Gender_1.Gender(2, 'FeMale'),
        ];
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
        this._empService.AddEmployee(new Employee_1.Employee(this.EmpCode, this.EmpName, this.Age, this.Salary, this.selectedGender.name))
            .subscribe(function (response) {
            alert("Save successfully !");
            location.reload();
        });
    };
    EmployeeListComponet.prototype.getEmployee = function (EmpCode) {
        var _this = this;
        this._empService.getEmployeeByCode(EmpCode).subscribe(function (empdata) {
            _this.employeeData = empdata;
        });
        //this._empService.getEmployeeByCode(EmpCode).subscribe((empdata) => this.employeeData = empdata);
        //console.log(this.employeeData);
        //this.EmpName = this.employeeData.EmpName;
    };
    EmployeeListComponet.prototype.DeleteEmployee = function (EmpCode) {
        var _this = this;
        if (confirm("Are you sure to delete ")) {
            this._empService.DeleteEmployee(EmpCode).subscribe(function (empdata) { return _this.employeeData = empdata; });
            alert("Deleted successfully !");
            location.reload();
        }
    };
    EmployeeListComponet.prototype.UpdateEmployee = function () {
        this._empService.updateEmployee(new Employee_1.Employee(this.employeeData.EmpCode, this.employeeData.EmpName, this.employeeData.Age, this.employeeData.Salary, this.employeeData.Gender))
            .subscribe(function (response) {
            alert("Update successfully !");
            location.reload();
        });
    };
    //GetEmployee(emplo)
    EmployeeListComponet.prototype.onSelect = function (gender) {
        this.selectedGender = null;
        for (var i = 0; i < this.Allgender.length; i++) {
            if (this.Allgender[i].id == gender) {
                this.selectedGender = this.Allgender[i];
            }
        }
        console.log(gender);
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