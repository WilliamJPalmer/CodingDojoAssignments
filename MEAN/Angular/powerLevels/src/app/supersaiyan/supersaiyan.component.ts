import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-supersaiyan',
  templateUrl: './supersaiyan.component.html',
  styleUrls: ['./supersaiyan.component.css']
})
export class SupersaiyanComponent implements OnInit {
  @Input() initialPowerLevel;

  
  constructor() { }

  ngOnInit() {
  }

}
