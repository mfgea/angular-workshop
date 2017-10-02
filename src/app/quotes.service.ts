import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Injectable()
export class QuotesService {

  // declare
  constructor(private http: Http) { }

  getQuote() {
    return this.http.get('https://talaikis.com/api/quotes/random')
      .map((quoteResponse: Response) => quoteResponse.json());
  }
}
