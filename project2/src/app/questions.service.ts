import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class QuestionsService {

  constructor(private http: HttpClient) { }
  public questions
  getQuestions(): Observable<any> {
      //let jsondata = `[{"question":"2+2", "option1":1,"option2":2,"option3":3,"option4":4,"answer":4},{"question":"3+2", "option1":1,"option2":2,"option3":5,"option4":4,"answer":3}]`;
      //return JSON.parse(jsondata);
      //return this.http.get<Question[]>(/*url*/);
     /*
      let xml = new XMLHttpRequest();
      xml.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText)
       }
    };
      xml.open('GET',`http://54.198.14.22:8090/api/questionslist?quiz=1`,true);
      xml.send();
      */
      return this.http.get(`http://54.198.14.22:8090/api/questionslist?quiz=1`);
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
