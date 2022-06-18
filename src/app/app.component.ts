import { Component, OnInit } from '@angular/core';
import * as questionsSource from 'src/shared/questions';
import { Question } from 'src/models/questions.model';
import { GameMachineService } from 'src/services/game-machine.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private gameMachineService: GameMachineService) {}
  title = 'dev-quizz-game';
  gameState$ = this.gameMachineService.getGameStateSubject();

  ngOnInit() {
    // this.gameMachineService.newGame();
  }

  nextQuestion() {
    console.log('next!');
    this.gameMachineService.nextQuestion();
  }

  startGame() {
    this.gameMachineService.nextQuestion();
  }

  seeResults() {
    this.gameMachineService.endGame();
  }

  newGame() {
    this.gameMachineService.newGame();
  }

  endGame() {
    this.gameMachineService.endGame();
  }
}
