import { Component } from '@angular/core';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quotes';
  topMessage: string;
  randomQuotes: any;

  constructor(private quoteService: QuoteService){
    this.topMessage = "Don't think too much. Just do what makes you happy.";
  }
  
  ngOnInit(){
    this.randomQuotes = this.quoteService.getRandomQuotes();
  }
  
}
