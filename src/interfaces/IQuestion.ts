export default interface IQuestion {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[]
  question: string;
  type: string;
}

export interface IResult {
  isCorrect: boolean;
  question: string
}

export interface IQuestionContext {
  questions: IQuestion[];
  loading: boolean;
  error: null | string;
  currentQuestion: null | IQuestion;
  getCurrentQuestion: (id: number) => void;
  scoreQuestion: (choice: string, question: IQuestion) => void;
  result: IResult[]
}
