import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-comp',
  templateUrl: './pipe-comp.component.html',
  styleUrls: ['./pipe-comp.component.css']
})
export class PipeCompComponent implements OnInit {

  constructor() { }
  
  text: string = 'Built in Pipe example';
  integer: number = 4.7783489834;
  percent: number = 0.89;
  amount: number = 300;
  date = new Date();
  dob = new Date('1995/09/17');

  ngOnInit(): void {
  }

}
