import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameStatus, IGameState } from 'src/models/GameState.model';
import { Question } from 'src/models/questions.model';
import { questions } from 'src/shared/questions';

@Injectable({
  providedIn: 'root',
})
export class GameMachineService {
  private readonly gameState$ = new BehaviorSubject<IGameState>(
    this.initializeGameState(questions)
  );
  constructor() {}

  getGameStateSnapshot(): IGameState {
    return this.gameState$.getValue();
  }

  getGameStateSubject(): Observable<IGameState> {
    return this.gameState$.asObservable();
  }

  newGame(): void {
    this.gameState$.next(this.initializeGameState(questions));
  }

  initializeGameState(allQuestions: Question[]): IGameState {
    return {
      gameStatus: GameStatus.READY,
      allQuestions: allQuestions,
      questionNumber: 0,
      remainingQuestionsNumber: questions.length,
      currentQuestion: null,
    };
  }

  endGame() {
    this.gameState$.next({
      ...this.gameState$.value,
      gameStatus: GameStatus.OVER,
    });
  }

  nextQuestion() {
    let randomQuestion;
    while (randomQuestion == null) {
      randomQuestion = this.getRandomQuestion(
        this.gameState$.value.allQuestions
      );
    }

    this.gameState$.next({
      ...this.gameState$.value,
      gameStatus:
        this.gameState$.value.allQuestions.length === 0
          ? GameStatus.OVER
          : GameStatus.ONGOING,
      allQuestions: this.removeQuestion(
        randomQuestion.id,
        this.gameState$.value.allQuestions
      ),
      currentQuestion: randomQuestion,
      questionNumber: this.gameState$.value.questionNumber + 1,
      remainingQuestionsNumber:
        this.gameState$.value.remainingQuestionsNumber - 1,
    });
  }

  getRandomQuestion(question: Question[]): Question {
    let randomIndex = this.randomIntFromInterval(0, questions.length - 1);
    console.log('randomIndex', randomIndex);
    return question[randomIndex];
  }

  randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  removeQuestion(id: number, questions: Question[]): Question[] {
    return questions.filter((question) => question.id !== id);
  }

  // updateCurrentQuestion(){

  // };

  // updateAllquestion() {

  // }
}
