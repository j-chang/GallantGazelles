import axios from 'axios';

const requestPitches = () => {
  return {
    type: 'REQUEST_PITCHES',
  }
}

const receivePitches = (json) => {
  return {
    type: 'RECEIVE_PITCHES',
    pitches: json.data
  }
}

const errorPitches = (err) => {
  return {
    type: 'REQUEST_PITCHES_ERROR',
    error: err
  }
}
export function fetchPitches(category = 'all') {
  return function(dispatch) {
    dispatch(requestPitches());
    //We can possibly define categories here? 
    axios.get('http://localhost:8080/api/pitches?q=all')
    .then(results => dispatch(receivePitches(results)))
    .catch(error => dispatch(errorPitches(error)))
  }
}

export function selectPitch (pitchId) {
  return {
    type: 'SELECT_PITCH',
    pitchId
  }
}

export function nextPitch() {
  return {
    type: 'NEXT_PITCH'
  }
}

export function previousPitch() {
  return {
    type: 'PREV_PITCH'
  }
}

function upvoteToggle() {
  return {
    type: 'UPVOTE_TOGGLE'
  }
}
export function upvote(userId, pitchId, prevUpvoteState) {
  return function(dispatch) {
    dispatch(upvoteToggle())
    axios({
      method: 'PUT',
      url: 'http://localhost:8080/api/pitches?'
    })
    .then(results => console.log(results))
    .catch(error => console.error(error))
  }
}

function downvoteToggle() {
  return {
    type: 'DOWNVOTE_TOGGLE'
  }
}
export function downvote(userId, pitchId, prevDownvoteState) {
  return function(dispatch) {
    dispatch(downvoteToggle())
    axios({
      method: 'PUT',
      url: 'http://localhost:8080/api/pitches'
    })
    .then(results => console.log(results))
    .catch(error => console.error(error))
  }
}