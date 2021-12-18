import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormControlName} from '@angular/forms';
import {City} from './city';
@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {
  citys:City[]=[
    {id:1,name:"Surat"},
    {id:2,name:"Vapi"},
    {id:3,name:"Valsad"}
  ]
  userform=new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    gender:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    mobileno:new FormControl('',[Validators.required,Validators.minLength(10)])
  })

  constructor() { }

  ngOnInit(): void {}
  get name()
  {
    return this.userform.get('name');
  }
  get email()
  {
    return this.userform.get('email');
  }
  get gender()
  {
    return this.userform.get('gender');
  }
  get city()
  {
    return this.userform.get('city');
  }
  get mobileno()
  {
    return this.userform.get('mobileno');
  }
  onSumbit()
  {
    console.warn(this.userform.value);
  }
  
}
