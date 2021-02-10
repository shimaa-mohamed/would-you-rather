export const SAVE_QUES = "SAVE_QUES";
export const ADD_QUES = "ADD_QUES";
export const RECIEVE_QUES = "RECIEVE_QUES";
export const SAVE_QUES_ANSWER = "SAVE_QUES_ANSWER";
export function receiveQues(questions) {
  return {
    type: RECIEVE_QUES,
    questions,
  };
}

export function saveQuesAnswer(authedUser, qes_id, answer) {
  return {
    type: SAVE_QUES_ANSWER,
    authedUser,
    qes_id,
    answer,
  };
}

export function addQues(ques) {
  return {
    type: ADD_QUES,
    ques,
  };
}
