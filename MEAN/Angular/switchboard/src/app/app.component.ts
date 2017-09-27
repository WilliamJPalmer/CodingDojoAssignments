import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';

  count1: number = 1;
  count2: number = 1;
  count3: number = 1;
  count4: number = 1;
  count5: number = 1;

  toggle1(){
    this.count1 = this.count1 + 1;
  }
  toggle2(){
    this.count2 = this.count2 + 1;
  }
  toggle3(){
    this.count3 = this.count3 + 1;
  }
  toggle4(){
    this.count4 = this.count4 + 1;
  }
  toggle5(){
    this.count5 = this.count5 + 1;
  }

}
