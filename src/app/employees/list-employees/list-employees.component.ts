import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model.ts';
@Component({
  // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
employess:Employee[]=[
  {  
  id : 1,
  name : "Frank",
  gender: "Male",
  email:"frank@gmail.com",
  phoneNumber:9865475634,
  contactPreference:"Email",
  dateofBirth: new Date('10/25/2000'),
  department:"IT",
  isActive:true,
  photoPath:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x"
  },
  {
  id : 2,
  name : "Mary",
  gender: "Female",
  email:"mary@gmail.com",
  phoneNumber:6548756934,
  contactPreference:"Phone",
  dateofBirth: new Date('09/05/1990'),
  department:"CSE",
  isActive:true,
  photoPath:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x"  
  },
  {
  id : 3,
  name : "Kavin",
  gender: "Male",
  email:"kavin@gmail.com",
  phoneNumber:6875569344,
  contactPreference:"Email",
  dateofBirth: new Date('02/28/2000'),
  department:"MECH",
  isActive:false,
  photoPath:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x"  
  }
]
  constructor() { }

  ngOnInit() {
  }

}