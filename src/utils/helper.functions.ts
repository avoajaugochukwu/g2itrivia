export type QuestionSessionOptions = {
  amount: number;
  difficulty: 'easy' | 'medium' | 'hard';
  type: string;
};

export const getQuestionSessionURL = (
  questionSessionOptions: QuestionSessionOptions,
): string => `amount=${questionSessionOptions.amount}&difficulty=${questionSessionOptions.difficulty}&type=${questionSessionOptions.type}`;

export const cleanString = (str: string) => str.replace(/&#039;/g, "'").replace(/&quot;/g, '"');
