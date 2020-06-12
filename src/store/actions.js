/*
 * action types
 */

export const SET_START_STATE_TIMER = 'SET_START_STATE_TIMER'
export const SET_MINUTES = 'SET_MINUTES'
export const START_TIMER = 'START_TIMER'
export const FIRE_TIMER = 'FIRE_TIMER'
export const RESTART_TIMER = 'RESTART_TIMER'
export const TOGGLE_TIMER = 'TOGGLE_TIMER'
export const SPEEDUP_TIMER = 'TOGGLE_TODO'
export const REDUCE_ONE_SECOND = 'REDUCE_ONE_SECOND'

/*
 * action creators
 */
export function setStartStateTimer() {
  return { type: SET_START_STATE_TIMER }
}

export function fireTimer() {
  return { type: FIRE_TIMER }
}

export function toggleTimer() {
  return { type: TOGGLE_TIMER }
}

export function speedupTimer(velocity) {
  return { type: SPEEDUP_TIMER, velocity }
}

export function setMinutes(minutes) {
  return { type: SET_MINUTES, minutes }
}

export function reduceOneSecond() {
  return { type: REDUCE_ONE_SECOND }
}

export const actionsCreators = {
  toggleTimer,
  speedupTimer,
  setMinutes
}
