import { Component } from '@angular/core';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quotes';
  randomQuotes: any;

  constructor(private quoteService: QuoteService){
    
  }
  
  ngOnInit(){
    this.randomQuotes = this.quoteService.getRandomQuotes();
  }
  
}
