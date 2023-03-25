import { Component, OnInit } from '@angular/core';

interface Type {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  types: Type[] = [
    {value: 'rent-0', viewValue: 'Rent'},
    {value: 'buy-1', viewValue: 'Buy'},
  ];
  constructor() {
  }
  
  ngOnInit(): void {
  }

}
