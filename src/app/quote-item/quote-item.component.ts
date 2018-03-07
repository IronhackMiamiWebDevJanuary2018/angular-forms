import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'quote-item',
  template: `
    <span> {{ theQuote.text }} </span>
    <small> {{ theQuote.author }} </small>
    <button (click)="onQuoteDelete()"> Delete </button>
  `
})
export class QuoteItemComponent implements OnInit, OnDestroy, OnChanges {
  @Input() theQuote: any;
  @Output() onDelete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit: quote-item component');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: quote-item component');
  }

  ngOnChanges(change) {
    console.log('ngOnChanges: quote-item component', change);
  }
}