import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit, OnDestroy {
  quotes: Array<any> = [{
    id: 1,
    text: 'Walk as if you are kissing the Earth with your feet.',
    author: 'Thich Nhat Hanh'
  }, {
    id: 2,
    text: 'Life is a journey. Time is a river. The door is ajar.',
    author: 'Jim Butcher'
  }, {
    id: 3,
    text: 'Simplicity is the ultimate sophistication.',
    author: 'Leonardo da Vinci'
  }];

  constructor() {}

  removeQuote (id) {
    this.quotes = this.quotes.filter(
      (quote) => quote.id !== id
    );
  }

  ngOnInit() {
    console.log('ngOnInit: quote-list component');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: quote-list component');
  }
}
