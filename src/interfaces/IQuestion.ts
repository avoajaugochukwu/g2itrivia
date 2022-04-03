export default interface IQuestion {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[]
  question: string;
  type: string;
}

export interface IQuestionState {
  questions: null | IQuestion[];
  loading: boolean;
  error: null | string;
  currentQuestionId: number;
  currentQuestion: null | IQuestion;
  getCurrentQuestion: () => void;
  scoreQuestion: (choice: boolean, question: IQuestion) => void;
}
