import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaydatatypes',
  templateUrl: './displaydatatypes.component.html',
  styleUrls: ['./displaydatatypes.component.css']
})
export class DisplaydatatypesComponent implements OnInit {
  dataint:any;
  datastring:any;
  today:number=Date.now();
  constructor() { 
    this.dataint=10;
    this.datastring="Hello World";
    
  }

  ngOnInit(): void {
  }
  
}
