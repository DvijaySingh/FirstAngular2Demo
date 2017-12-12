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
var router_1 = require("@angular/router");
var Employee_Service_1 = require("./Employee.Service");
var EmployeeDetailsComponent = (function () {
    function EmployeeDetailsComponent(_empServive, _activatedRoute) {
        this._empServive = _empServive;
        this._activatedRoute = _activatedRoute;
    }
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var empcode = this._activatedRoute.snapshot.params['EmpCode'];
        this._empServive.getEmployeeByCode(empcode).subscribe(function (empdata) { return _this.employee = empdata; }, function (Error) { return console.log(Error); });
    };
    return EmployeeDetailsComponent;
}());
EmployeeDetailsComponent = __decorate([
    core_1.Component({
        selector: 'empdetails',
        templateUrl: 'app/Employee/EmployeeDetails.html',
        providers: [Employee_Service_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [Employee_Service_1.EmployeeService, router_1.ActivatedRoute])
], EmployeeDetailsComponent);
exports.EmployeeDetailsComponent = EmployeeDetailsComponent;
//# sourceMappingURL=EmployeeDetails.js.map