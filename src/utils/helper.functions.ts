export type QuestionSessionOptions = {
  amount: number;
  difficulty: 'easy' | 'medium' | 'hard';
  type: string;
};

export const getQuestionSessionURL = (
  questionSessionOptions: QuestionSessionOptions,
): string => `amount=${questionSessionOptions.amount}&difficulty=${questionSessionOptions.difficulty}&type=${questionSessionOptions.type}`;
