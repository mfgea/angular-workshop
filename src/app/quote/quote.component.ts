import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  // Define a component input binding
  @Input() quote: {quote: string, author: string, cat: string};
}
