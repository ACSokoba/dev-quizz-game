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
  questions: Question[] = (questionsSource as any).default;
  currentPage: 'home' | 'game' | 'end' = 'home';
  currentQuestion: null | Question;
  questionCount = 1;

  ngOnInit(): void {
    console.log('QUESTIONS', this.questions);
  }

  start() {
    // enclencher la transition
    // passer à la premiere question
    this.currentPage = 'game';
    this.currentQuestion = this.getCurrentQuestion();
  }

  nextQuestion() {
    this.questionCount++;
    this.currentQuestion = this.getCurrentQuestion();
  }

  getCurrentQuestion(): Question {
    let randomIndex = this.randomIntFromInterval(0, this.questions.length - 1);
    let question: Question = this.questions[randomIndex];
    this.refreshQuestions(randomIndex);
    return question;
  }

  refreshQuestions(index: number): void {
    console.log('before splice', this.questions);
    this.questions.splice(index, 1);
    if (this.questions.length === 0) {
      this.endGame();
    }
  }

  randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  endGame(): void {
    this.currentPage = "end";
  }
}
