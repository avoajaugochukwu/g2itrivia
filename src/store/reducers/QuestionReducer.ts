export {};

// import IQuestion from '../../interfaces/IQuestion';

// type QuestionAction =
// | { type: 'nextQuestion', payload: IQuestion }
// | { type: 'getScore', payload: { } };

// export const todoReducer = (state: QuestionAction, action: TodoAction): QuestionAction => {
//   switch (action.type) {
//     case 'nextQuestion':
//       return {
//         ...state,
//         todos: [...state.todos, action.payload],
//       };

//     case 'toggleTodo':
//       return {
//         ...state,
//         todos: state.todos.map(({ ...todo }) => {
//           if (todo.id === action.payload.id) {
//             todo.completed = !todo.completed;
//           }
//           return todo;
//         }),
//       };

//     default:
//       return state;
//   }
// };
