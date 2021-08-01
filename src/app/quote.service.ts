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
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/192px-Mahatma-Gandhi%2C_studio%2C_1931.jpg"
      },
      {
          "author": "Dr. A.P.J Abdul Kalam",
          "message": "All birds find shelter during the rain. But eagle avoids rain by flying over the clouds.",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/A._P._J._Abdul_Kalam_in_2008.jpg/180px-A._P._J._Abdul_Kalam_in_2008.jpg"
      },
      {
          "author": "Steve Jobs",
          "message": "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/248px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg"
      },
      {
          "author": "Anne Frank",
          "message": "Whoever is happy will make others happy too.",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/AnneFrank1940_crop.jpg/209px-AnneFrank1940_crop.jpg"
      },
      {
          "author": "Eleanor Roosevelt",
          "message": "The future belongs to those who believe in the beauty of their dreams.",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Eleanor_Roosevelt_portrait_1933.jpg/198px-Eleanor_Roosevelt_portrait_1933.jpg"
      },
      {
          "author": "Nelson Mandela",
          "message": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/185px-Nelson_Mandela_1994.jpg"
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
