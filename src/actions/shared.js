import { receiveUsers, saveUserAnswer, addUserQues } from "../actions/users";
import { receiveQues, saveQuesAnswer, addQues } from "../actions/questions";
import { setAuthedUser } from "../actions/authuser";
import {_getUsers,_getQuestions,_saveQuestion,_saveQuestionAnswer} from "../utils/_DATA";


export function handleInitialQues() {
  return (dispatch) => {
    return _getQuestions().then((questions) => {
      dispatch(receiveQues(questions));
    });
  };
}
export function handleAddQues(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
      const { authedUser } = getState();
      const author = authedUser;
  
      return _saveQuestion({ optionOneText, optionTwoText, author }).then(
        (Ques) => {
          dispatch(addQues(Ques));
          dispatch(addUserQues(authedUser, Ques.id));
        }
      );
    };
  }

export function handleInitialUsers(AUTHED_ID) {
  return (dispatch) => {
    return _getUsers().then((users) => {
      dispatch(receiveUsers(users));
      //can be removed
     dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}

export function handleSaveQuesAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(saveQuesAnswer(authedUser, qid, answer));
      dispatch(saveUserAnswer(authedUser, qid, answer));
    });
  };
}


