import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MainComponent } from './main/main.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { SelectQuizComponent } from './select-quiz/select-quiz.component';
import { QuestionComponent } from './question/question.component';
import {QuestionsService } from './questions.service';
import {LeaderService } from './leader.service';
import {UserService} from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LeaderboardComponent,
    MainComponent,
    AccountComponent,
    LoginComponent,
    SelectQuizComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent},
      {path: 'login', component: LoginComponent}
    ])
  ],
  providers: [QuestionsService, LeaderService],
  bootstrap: [AppComponent]
})
export class AppModule {
  

}
