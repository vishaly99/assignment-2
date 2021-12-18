import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displayarray',
  templateUrl: './displayarray.component.html',
  styleUrls: ['./displayarray.component.css']
})
export class DisplayarrayComponent implements OnInit {
  data=["a","b","c"];
  dataobj=[
    {name:"asd",email:"asd@gmail.com"},
    {name:"aaa",email:"aaa@gmail.com"},
    {name:"qqq",email:"qqq@gmail.com"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
