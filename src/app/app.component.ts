import { Component, OnInit } from '@angular/core';
import { QuotesService } from './quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public quote: {quote: string, author: string, cat: string};

  public constructor(private quotesService: QuotesService) {}

  public ngOnInit() {
    this.changeQuote();
  }

  public changeQuote() {
    this.quotesService.getQuote()
      .subscribe((quote: any) => {
        this.quote=quote;
      })
  }

  title = 'app';
}
