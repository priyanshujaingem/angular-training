import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-comp',
  templateUrl: './directive-comp.component.html',
  styleUrls: ['./directive-comp.component.css'],
})
export class DirectiveCompComponent implements OnInit {
  constructor() {}
  names: string[] = ['Ajay', 'Ram', 'Shyam', 'John', 'Doe', 'Aman'];

  stuDetails: object[] = [
    { id: 1, name: 'Student1' },
    { id: 2, name: 'Student2' },
    { id: 3, name: 'Student3' },
  ];

  isBlue: boolean = true;

  addDetails() {
    this.names.push('Zaid');
    console.log("names arr",this.names);
    
  }
  changeColor() {
    this.isBlue = !this.isBlue;
  }

  removeDetails(idx: number) {
    this.names.splice(idx, 1);
  }

  ngOnInit(): void {}
}
