import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quote';

  quotes = []
  quote = {
    content: '',
    author: '',
    count: 0,
  }

  onSubmit(){
    // console.log('Submitted')
    this.quotes.push(this.quote);
    this.quote = { // this will clear form every time
      content: '',
      author: '',
      count: 0
    }
    



  }
}
