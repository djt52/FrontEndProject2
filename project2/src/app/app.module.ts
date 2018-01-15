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
import { QuizComponent } from './quiz/quiz.component';
import { LoginComponent } from './login/login.component';
import { QuestionsService } from './questions.service'
import { LeaderService } from './leader.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LeaderboardComponent,
    MainComponent,
    AccountComponent,
    QuizComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent},
      {path: 'login', component: LoginComponent}
      {path: 'quiz', component: QuizComponent}
    ])
  ],
  providers: [QuestionsService, LeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
