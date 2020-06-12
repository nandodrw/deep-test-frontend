import React, { Component } from 'react'
import { connect } from "react-redux";
import { setMinutes, setStartStateTimer, fireTimer } from '../../store/actions'
import { START_TIMER } from '../../store/actions'
import './styles.css'

class InputTime extends Component {
  constructor(props) {
    super(props);
  }

  handleFireTimer() {
    this.props.action(START_TIMER)
  }

  get disabledStart() {
    return this.props.timer.initialMinutes == null
  }

  render() {
    return (
      <div className={'minute-input-container'}>
        <span>Countdown:</span>
        <input
          className={'minutes-input'}
          type="number"
          placeholder={'(Min)'}
          value={this.props.timer.initialMinutes || ""}
          onChange={e => this.props.setMinutes(parseInt(e.target.value) || null)}
        />
        <button
          disabled={this.disabledStart}
          className={'start-btn'}
          onClick={() => this.handleFireTimer()}>Start</button>
      </div>
    )
  }
}

export default connect(null,
  {
    setMinutes
  }
  )(InputTime)