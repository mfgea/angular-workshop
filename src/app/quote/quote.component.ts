import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  public quote: {quote: string, author: string, cat: string} = {
      quote: 'Respect is one of the greatest expressions of love.',
      author: 'Miguel Angel Ruiz',
      cat: 'respect'
  };
 }