import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  // Define a component input binding
  @Input() quote: {quote: string, author: string, cat: string};
  @Input() showButton: boolean;

  // Define a component output binding, able to emit an event
  @Output() onQuoteChange = new EventEmitter<any>();
  // Define a method to control the native 'click' event from the button
  readAnother(event) {
    this.onQuoteChange.emit();
  }
}
