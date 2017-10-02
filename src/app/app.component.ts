import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public quote: {quote: string, author: string, cat: string};

  public ngOnInit() {
    this.quote = {
      quote: 'Respect is one of the greatest expressions of love.',
      author: 'Miguel Angel Ruiz',
      cat: 'respect'
    };
  }

  public changeQuote() {
    // Redefine the quote property.
    this.quote = {
      quote: 'Identidad propia.',
      author: 'Cabrales',
      cat: 'marketing'
    };
  }

  title = 'app';
}
