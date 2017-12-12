import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'


import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './Employee/EmployeeDetails';
import { EmployeeService } from './Employee/Employee.Service';
//import { EmployeeServiceComponent } from './Employee/Employee.Service.Component'
import { EmployeeListComponet } from './Employee/EployeeList'
import { HomeComponent } from './Home/Home.Component'
import { PageNotFoundComponent } from './PageNotFoundComponent'

const AppRotes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Employees', component: EmployeeListComponet },
    { path: 'Employees/:EmpCode', component: EmployeeDetailsComponent },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
]
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(AppRotes, { useHash: true })],
    declarations: [AppComponent, EmployeeDetailsComponent, EmployeeListComponet, HomeComponent, PageNotFoundComponent],
    providers: [EmployeeService],
    bootstrap: [AppComponent]
})



export class AppModule {

}
