import { RECIEVE_QUES, SAVE_QUES_ANSWER, ADD_QUES } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECIEVE_QUES:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUES_ANSWER:
      const { authedUser, qes_id, answer } = action;
      return {
        ...state,
        [qes_id]: {
          ...state[qes_id],
          [answer]: {
            ...state[qes_id][answer],
            votes: state[qes_id][answer].votes.concat([authedUser]),
          },
        },
      };
    case ADD_QUES:
      return {
        ...state,
        [action.ques.id]: action.ques,
      };
    default:
      return state;
  }
}
