import { Question } from './questions.model';
import { questions } from '../shared/questions';

export enum GameStatus {
  READY = 'READY',
  ONGOING = 'ONGOING',
  OVER = 'OVER',
}

export interface IGameState {
  gameStatus: GameStatus;
  allQuestions: Question[];
  questionNumber: number;
  remainingQuestionsNumber: number;
  currentQuestion: Question | null;
}
