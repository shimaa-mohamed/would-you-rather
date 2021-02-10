import {
  RECEIVE_USERS,
  SAVE_USER_ANSWER,
  ADD_USER_QUES,
} from "../actions/users";

export default function user(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USER_QUES:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat([action.id]),
        },
      };
    case SAVE_USER_ANSWER:
      const { authedUser, ques_id, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [ques_id]: answer,
          },
        },
      };

    default:
      return state;
  }
}
