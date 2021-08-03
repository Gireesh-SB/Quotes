import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  topMessage: string;
  randomQuotes: any;

  constructor(){
    this.topMessage = "Don't think too much. Just do what makes you happy.";
  }

  ngOnInit(): void {
  }

  reload(){
    window.location.reload();
  }

}
