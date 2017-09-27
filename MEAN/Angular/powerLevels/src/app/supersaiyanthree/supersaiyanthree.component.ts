import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-supersaiyanthree',
  templateUrl: './supersaiyanthree.component.html',
  styleUrls: ['./supersaiyanthree.component.css']
})
export class SupersaiyanthreeComponent implements OnInit {
  @Input() initialPowerLevel;

  
  constructor() { }

  ngOnInit() {
  }

}
