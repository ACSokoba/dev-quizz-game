export interface Question {
  id: number;
  title: string;
  category: string;
  content: string;
  choices: Choice[];
  choosed?: string;
}

export interface Choice {
  choiceId: string;
  content: string;
  isRightAnswer: boolean;
}
