import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class QuestionsService {

  constructor() { }

  getQuestions(): Observable<Question[]> {
      let jsondata = `[{"question":"2+2", "option1":1,"option2":2,"option3":3,"option4":4,"answer":4},{"question":"3+2", "option1":1,"option2":2,"option3":5,"option4":4,"answer":3}]`;
      return JSON.parse(jsondata);
  }
}

export class Question {

    constructor(question: string, option1: string, option2: string, option3: string, option4: string, answer: number) {
    this.question = question;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.answer = answer;
    }
    question: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    answer: number;
}
