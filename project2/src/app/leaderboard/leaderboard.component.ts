import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent implements OnInit {
  leader = [new Leaders('John',1000), new Leaders('Jim',900)];

  constructor() { }

  ngOnInit() {
  //leaders = [{"name":"John", "score":1000}, {"name":"Jim", "score":900}, {"name":"Luke", "score":800}, {"name":"Ron", "score":700},];
  //leader=[new Leaders('John',1000), new Leaders('Bob',900)];
  }
   // public leader: Leaders[];
}

export class Leaders {
  //public showLeaders()
  public name: string;
  public score: number;
  
  constructor(s: string, n: number) {
      this.name=s;
      this.score=n;
  }
  

}
