﻿import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { UserService } from '../user.service'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private questionsService: QuestionsService,private userService: UserService) { }

  ngOnInit() {
  /*
    let jsondata = `[{"question":"Arasilly is stupid.Loream Ipsum Fataneums. AWDADWADADAWDAWDWDAWD", "option1":1,"option2":2,"option3":3,"option4":4,"answer":4},{"question":"3+2", "option1":1,"option2":2,"option3":5,"option4":4,"answer":3}]`;
    this.questions = JSON.parse(jsondata);
    this.questionsService.getQuestions();
    */
    //this.questionGet(this.parse);
    this.index = 0;
    this.questionsService.getQuestions().subscribe(
        res => {
          console.log(res);
          this.questions = res;
          console.log(this.questions);   
          this.questionAnswered(0);
         }
    );
  }
  /*
  questionGet(cfunction) {
    let xml = new XMLHttpRequest();
    xml.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        cfunction(this);
       }
    };
    xml.open('GET',`http://54.198.14.22:8090/api/questionslist?quiz=1`,true);
    xml.send();
  }
  
  parse(xhttp) {
    let jsondata = xhttp.responseText;
    this.questions=JSON.parse(jsondata);
    this.questionAnswered(0);
  }

  
    this.index = 0;
    this.questionAnswered(0);
  }
  */
  public question: string;
  public option1: string;
  public option2: string;
  public option3: string;
  public option4: string;

  public questions;
  public index;

  //NgStyle 
  questionAnswered(answer: number) {
      if(answer != 0) {
        if(answer == this.questions[this.index].answer) {
            this.userService.correct();
            console.log("Correct")
        } else {
            this.userService.incorrect();
            console.log("Incorrect")
        }
        this.index++;
       }
      //console.log(this.index);
      if(this.index < this.questions.length) {
        this.question = this.questions[this.index].question;
        this.option1 = this.questions[this.index].choice1;
        this.option2 = this.questions[this.index].choice2;
        this.option3 = this.questions[this.index].choice3;
        this.option4 = this.questions[this.index].choice4;
      } else {
          console.log(this.userService.getRight())
          console.log(this.userService.getWrong())
          console.log(this.userService.getTotal())
      }
  }

}
