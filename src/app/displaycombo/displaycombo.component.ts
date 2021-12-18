import { Component, OnInit } from '@angular/core';
import {Department} from './department';
@Component({
  selector: 'app-displaycombo',
  templateUrl: './displaycombo.component.html',
  styleUrls: ['./displaycombo.component.css']
})
export class DisplaycomboComponent implements OnInit {

  departments:Department[]=[
    {id:1,name:"HR"},
    {id:2,name:"IT"},
    {id:3,name:"SERVICE"}
  ]
    
  constructor() { }

  ngOnInit(): void {
  }

}
