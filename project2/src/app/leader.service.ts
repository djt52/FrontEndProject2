import { Injectable } from '@angular/core';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders() {
      return [new Leaders('John',1000), new Leaders('Jim',900)];
  }
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