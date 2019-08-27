import {
  savePoll,
  savePollAnswer
} from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const ADD_POLL = 'ADD_POLL';
export const ADD_POLL_ANSWER = 'ADD_POLL_ANSWER';


export function receivePolls (polls) {
  return {
    type: RECEIVE_POLLS,
    polls
  }
}

function addPoll (poll) {
  return {
    type: ADD_POLL,
    poll
  }
}

function addPollAnswer (pollAnswer) {
  return {
    type: ADD_POLL_ANSWER,
    pollAnswer
  }
}

export function handleAddPoll (poll) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());

    return savePoll({
      ...poll,
      author: authedUser
    })
      .then((poll) => {
        dispatch(addPoll(poll));
      })
      .then(() => dispatch(hideLoading()))
      .catch(() => {
        alert('An error occured. Try again.');
      });
  }
}

export function handleAddPollAnswer (pollAnswer, cb) {
  return (dispatch) => {
    return savePollAnswer(pollAnswer)
      .then((pollAnswer) => {
        dispatch(addPollAnswer(pollAnswer));
        cb();
      })
      .catch(() => {
        alert('An error occured. Try again.');
      });
  }
}