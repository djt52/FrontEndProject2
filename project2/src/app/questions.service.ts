import { Injectable } from '@angular/core';

@Injectable()
export class QuestionsService {

  constructor() { }

  getQuestions() {
      let jsondata = `[{"question":"2+2", "option1":1,"option2":2,"option3":3,"option4":4,"answer":4},{"question":"3+2", "option1":1,"option2":2,"option3":5,"option4":4,"answer":3}]`;
      return JSON.parse(jsondata);
  }
}
