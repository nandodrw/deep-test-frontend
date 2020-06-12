import { call, put, cancel, fork, takeLatest, select, delay } from 'redux-saga/effects'
import { START_TIMER, RESTART_TIMER, reduceOneSecond, fireTimer, setStartStateTimer } from './actions'
import { TimerStatus } from './reducers'

const getState = (state) => state.timer
let tickTimer;

function* nextTickTimer() {
  let timer = yield select(getState);
  if (timer.status !== 1) return
  yield put(reduceOneSecond())
  yield delay(1000 / timer.velocity)
  tickTimer = yield fork(nextTickTimer)
}

export function* startTimer() {
  if (tickTimer) {
    cancel(tickTimer)
  }
  yield put(setStartStateTimer())
  yield put(fireTimer())
  tickTimer = yield fork(nextTickTimer)
}

export default function* rootSaga() {
  yield takeLatest(START_TIMER, startTimer)
  yield takeLatest(RESTART_TIMER, nextTickTimer)
}
