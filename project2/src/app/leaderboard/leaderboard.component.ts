import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../leader.service';
//import {Leaders} from '../leader.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent implements OnInit {


  constructor(private leaderService:LeaderService) { }

   public leader;

  ngOnInit() {
    this.leader = this.leaderService.getLeaders();
    console.log(this.leader)
}


  

}
