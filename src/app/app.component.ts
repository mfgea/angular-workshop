import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public quote: {quote: string, author: string, cat: string} = {
    quote: 'Respect is one of the greatest expressions of love.',
    author: 'Miguel Angel Ruiz',
    cat: 'respect'
  };
  title = 'app';
}
