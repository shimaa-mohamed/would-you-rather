export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_QUES = "ADD_USER_QUES";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addUserQues(authedUser, id) {
  return {
    type: ADD_USER_QUES,
    authedUser,
    id,
  };
}
export function saveUserAnswer(authedUser, ques_id, answer) {
  return {
    type: SAVE_USER_ANSWER,
    authedUser,
    ques_id,
    answer,
  };
}
