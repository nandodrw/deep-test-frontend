import { combineReducers } from 'redux'

import {
  SET_START_STATE_TIMER,
  SET_MINUTES,
  FIRE_TIMER,
  TOGGLE_TIMER,
  SPEEDUP_TIMER,
  REDUCE_ONE_SECOND
} from './actions'

export const TimerStatus = {
  RUNNING: 1,
  STOP: 2,
  IDLE: 3
}

const initialState = {
  initialMinutes: null,
  initialMinutesStore: null,
  minutes: 0,
  seconds: 0,
  velocity: 1,
  status: TimerStatus.IDLE,
  timer: null
}

function timer(state = initialState, action) {
  switch (action.type) {

    case SET_START_STATE_TIMER:
      return {
        ... state,
        minutes: state.initialMinutes,
        initialMinutesStore: state.initialMinutes,
        seconds: 0,
        initialMinutes: null,
        velocity: 1
      }

    case SET_MINUTES:
      return {
        ...state,
        initialMinutes: action.minutes
      }

    case FIRE_TIMER:
      return {
        ...state,
        status: TimerStatus.RUNNING
      }

    case TOGGLE_TIMER:
      return {
        ...state,
        status: state.status === TimerStatus.RUNNING ? TimerStatus.STOP
          : (state.status ===TimerStatus.STOP ? TimerStatus.RUNNING : state.status)
      }

    case SPEEDUP_TIMER:
      return {
        ...state,
        velocity: action.velocity
      }

    case REDUCE_ONE_SECOND:
      if (state.seconds > 0) {
        return {
          ...state,
          seconds: --state.seconds
        }
      } else if (state.seconds === 0 && state.minutes > 0) {
        return {
          ...state,
          minutes: --state.minutes,
          seconds: 59
        }
      }
      else {
        return {
          ...state,
          status: TimerStatus.STOP
        }
      }
    default:
      return state
  }
}

const countDownTimer = combineReducers({
  timer
}, initialState)

export default countDownTimer