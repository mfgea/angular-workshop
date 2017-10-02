import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
}
