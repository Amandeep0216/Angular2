import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentapp',
  templateUrl: './studentapp.component.html',
  styleUrls: ['./studentapp.component.css']
})
export class StudentappComponent implements OnInit {

  @Input("student") ob:any;
  //@Input() student:any;

  constructor() { }

  ngOnInit(): void {
  }

}
