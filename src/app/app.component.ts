import { Component, OnInit } from '@angular/core';
import * as questionsSource from 'src/shared/questions.json';
import { Question } from 'src/shared/questions.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'dev-quizz-game';
  questions = questionsSource;
  currentPage: 'home' | 'game' | 'end' = 'home';
  currentQuestion: null | Question;
  ngOnInit(): void {
    this.questions = questionsSource;
    console.log('QUESTIONS', this.questions);
  }

  start() {
    // enclencher la transition
    // passer à la premiere question
    this.currentPage = 'game';
    this.currentQuestion = this.getCurrentQuestion();
  }

  getCurrentQuestion(): Question {
    let randomIndex = Math.floor(Math.random() * this.questions.length - 1);
    let question: Question = this.questions[randomIndex];
    this.refreshQuestions(randomIndex);
    return question;
  }
  refreshQuestions(index: number): void {
    this.questions.splice(index, 1);
  }
}
