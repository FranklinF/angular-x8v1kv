import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import {RouterModule,Routes} from '@angular/router';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';

const approutes:Routes= [
  {path:'list', component:ListEmployeesComponent},
  {path:'create', component:CreateEmployeeComponent},
  {path:'', redirectTo:'/list',pathMatch:'full'}
]
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(approutes) ],
  declarations: [ AppComponent, HelloComponent, ListEmployeesComponent, CreateEmployeeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
