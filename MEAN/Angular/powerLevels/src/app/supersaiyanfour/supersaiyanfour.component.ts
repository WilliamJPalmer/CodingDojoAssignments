import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-supersaiyanfour',
  templateUrl: './supersaiyanfour.component.html',
  styleUrls: ['./supersaiyanfour.component.css']
})
export class SupersaiyanfourComponent implements OnInit {
  @Input() initialPowerLevel;

  
  constructor() { }

  ngOnInit() {
  }

}
