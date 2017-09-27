import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  colors = ['Aqua','BlueViolet', 'Chartreuse', 'Crimson', 'Cyan', 'DarkBlue', 'DarkGreen', 'DodgerBlue', 'Gold','Green','GreenYellow']
  // boxColor = (Math.floor(Math.random() * 6)) + 1
  a: number = Math.floor(Math.random() * 10) + 1;
  b: number = Math.floor(Math.random() * 10) + 1;
  c: number = Math.floor(Math.random() * 10) + 1;
  d: number = Math.floor(Math.random() * 10) + 1;
  e: number = Math.floor(Math.random() * 10) + 1;
  f: number = Math.floor(Math.random() * 10) + 1;

}
