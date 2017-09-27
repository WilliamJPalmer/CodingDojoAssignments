import { Component } from '@angular/core';
import { Power } from './power';
// import { ngModel } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  power_levels = Array<Power>();
  power = new Power;
  construction(){
    this.power = new Power();
  }
  onSubmit(){
    this.power_levels.push(this.power);
    console.log(this.power);
  }
}
