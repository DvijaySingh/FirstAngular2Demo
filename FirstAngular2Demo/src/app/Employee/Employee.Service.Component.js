"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeServiceComponent = (function () {
    function EmployeeServiceComponent() {
    }
    EmployeeServiceComponent.prototype.getEmployee = function () {
        return [{ Age: 10, EmpCode: 1, Gender: 'Male', EmpName: 'durg', Salary: 1100 },
            { Age: 10, EmpCode: 2, Gender: 'Male', EmpName: 'durg', Salary: 1100 },
            { Age: 10, EmpCode: 3, Gender: 'Male', EmpName: 'durg', Salary: 1100 },];
    };
    return EmployeeServiceComponent;
}());
EmployeeServiceComponent = __decorate([
    core_1.Injectable()
], EmployeeServiceComponent);
exports.EmployeeServiceComponent = EmployeeServiceComponent;
//# sourceMappingURL=Employee.Service.Component.js.map