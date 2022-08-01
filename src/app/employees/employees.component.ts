import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  headers:any[]=[];
  rows:any[]=[];


  constructor(public service: EmployeesService) { }

  ngOnInit(): void {
    this.headers=this.service.headers,
    this.rows=this.service.rows
  }

}
