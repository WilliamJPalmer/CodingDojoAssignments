import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() quotes;

  constructor() { }// before

  voteUp(quote){
    quote.count ++;
  }

  voteDown(quote){
    var count = 0;
    if (quote.count > 0){
      quote.count --
    }
  }

  delete(i){
    this.quotes.splice(i, 1);
  }


  ngOnInit() {//after
  }


}
