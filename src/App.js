import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionsCreators } from './store/actions'
import InputTime from './components/InputTime'
import CountDown from './components/CountDown'
import TimerMessage from './components/TimerMessage'
import './App.css'

function App({action, storeState}) {
  return (
    <div className={'main-container'}>
      <InputTime timer={storeState.timer} action={action}/>
      <TimerMessage timer={storeState.timer}/>
      <CountDown timer={storeState.timer} action={action}/>
    </div>
  );
}


function mapStateToProps(state) {
  return { storeState: state }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionsCreators, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
