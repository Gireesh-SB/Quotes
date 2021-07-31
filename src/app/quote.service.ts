import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  allQuotes:any;

  constructor() { 
    this.allQuotes = [
      {
          "author": "Mahatma Gandhi",
          "message": "An eye for an eye only ends up making the whole world blind.",
          "profile": "https://en.wikipedia.org/wiki/Mahatma_Gandhi",
          "image": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Portrait_Gandhi.jpg"
      },
      {
          "author": "Dr. A.P.J Abdul Kalam",
          "message": "All birds find shelter during the rain. But eagle avoids rain by flying over the clouds.",
          "image": "https://upload.wikimedia.org/wikipedia/commons/b/b0/A._P._J._Abdul_Kalam_in_2008.jpg"
      },
      {
          "author": "Steve Jobs",
          "message": "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
          "image": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg"
      },
      {
          "author": "Anne Frank",
          "message": "Whoever is happy will make others happy too.",
          "image": "https://upload.wikimedia.org/wikipedia/commons/4/41/AnneFrankSchoolPhoto_%28cropped%29.jpg"
      },
      {
          "author": "Eleanor Roosevelt",
          "message": "The future belongs to those who believe in the beauty of their dreams.",
          "image": "https://upload.wikimedia.org/wikipedia/commons/2/22/Eleanor_Roosevelt_portrait_1933.jpg"
      },
      {
          "author": "Nelson Mandela",
          "message": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/02/Nelson_Mandela_1994.jpg"
      }      
    ];
  }

  getQuotes(){
    return this.allQuotes;
  }

  getRandomQuotes(){
    return this.shuffleArray(this.allQuotes);
  }

  private shuffleArray(array:any) {
    for (var i = array.length - 1; i > 0; i--) {    
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));                    
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }        
    return array;
  }
}
