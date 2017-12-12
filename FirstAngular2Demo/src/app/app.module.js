"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var EmployeeDetails_1 = require("./Employee/EmployeeDetails");
var Employee_Service_1 = require("./Employee/Employee.Service");
//import { EmployeeServiceComponent } from './Employee/Employee.Service.Component'
var EployeeList_1 = require("./Employee/EployeeList");
var Home_Component_1 = require("./Home/Home.Component");
var PageNotFoundComponent_1 = require("./PageNotFoundComponent");
var AppRotes = [
    { path: 'Home', component: Home_Component_1.HomeComponent },
    { path: 'Employees', component: EployeeList_1.EmployeeListComponet },
    { path: 'Employees/:EmpCode', component: EmployeeDetails_1.EmployeeDetailsComponent },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(AppRotes, { useHash: true })],
        declarations: [app_component_1.AppComponent, EmployeeDetails_1.EmployeeDetailsComponent, EployeeList_1.EmployeeListComponet, Home_Component_1.HomeComponent, PageNotFoundComponent_1.PageNotFoundComponent],
        providers: [Employee_Service_1.EmployeeService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map