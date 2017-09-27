import { Component, Input, EventEmitter } from '@angular/core';
// import { power } from './power';
// import {  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Power';

  users = [];

  user:  {
    power_level: 0
  }

  onClick(){
    console.log("button was clicked blahs blash test 1")
    this.users.push(this.user[0])
  }
}
