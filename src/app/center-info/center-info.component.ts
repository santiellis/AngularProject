import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'center-info',
  templateUrl: './center-info.component.html',
  styleUrls: ['./center-info.component.css']
})
export class CenterInfoComponent implements OnInit {
  value : string;

  constructor() { 
    this.value = '';
  }

  ngOnInit(): void {
  }

}
