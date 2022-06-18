import { Question } from 'src/models/questions.model';

export const questions: Question[] = [
  {
    id: 1,
    title: 'Question Alphabet',
    category: '',
    content: 'What is the good answer ?',
    choices: [
      {
        choiceId: '1A',
        content: 'A',
        isRightAnswer: true,
      },
      {
        choiceId: '1B',
        content: 'B',
        isRightAnswer: false,
      },
      {
        choiceId: '1C',
        content: 'C',
        isRightAnswer: false,
      },
      {
        choiceId: '1D',
        content: '1D',
        isRightAnswer: false,
      },
    ],
  },
  {
    id: 2,
    title: 'Question Numero',
    category: '',
    content: 'What is the good answer ?',
    choices: [
      {
        choiceId: '2A',
        content: '1',
        isRightAnswer: false,
      },
      {
        choiceId: '2B',
        content: '2',
        isRightAnswer: false,
      },
      {
        choiceId: '2C',
        content: '3',
        isRightAnswer: true,
      },
      {
        choiceId: '2D',
        content: '4',
        isRightAnswer: false,
      },
    ],
  },
  {
    id: 3,
    title: 'Question mixte',
    category: '',
    content: 'What is the good answer ?',
    choices: [
      {
        choiceId: '3A',
        content: 'A1',
        isRightAnswer: false,
      },
      {
        choiceId: '3B',
        content: 'B2',
        isRightAnswer: false,
      },
      {
        choiceId: '3C',
        content: 'C3',
        isRightAnswer: false,
      },
      {
        choiceId: '3D',
        content: 'D4',
        isRightAnswer: true,
      },
    ],
  },
];
