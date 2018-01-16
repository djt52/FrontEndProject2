import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let jsondata = `[{"question":"Arasilly is stupid.Loream Ipsum Fataneums. AWDADWADADAWDAWDWDAWD", "option1":1,"option2":2,"option3":3,"option4":4,"answer":4},{"question":"3+2", "option1":1,"option2":2,"option3":5,"option4":4,"answer":3}]`;
    this.questions = JSON.parse(jsondata);
    this.index = 0;
    this.questionAnswered(0);
  }
  public question: string;
  public option1: string;
  public option2: string;
  public option3: string;
  public option4: string;

  public questions;
  public index;

  //NgStyle 
  questionAnswered(answer: number) {
      //if(this.index == 0) {
      console.log(this.index)
      this.question = this.questions[this.index].question;
      this.option1 = this.questions[this.index].option1;
      this.option2 = this.questions[this.index].option2;
      this.option3 = this.questions[this.index].option3;
      this.option4 = this.questions[this.index].option4;
      this.index++;
      
  }

}
