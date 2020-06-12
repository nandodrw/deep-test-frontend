import React, { Component } from 'react'
import {connect} from "react-redux"
import {RESTART_TIMER, speedupTimer, toggleTimer} from "../../store/actions"
import './styles.css'

class CountDown extends Component {
  constructor(props) {
    super(props);
  }

  handleToggleTimer() {
    this.props.toggleTimer()
    this.props.action(RESTART_TIMER)
  }

  get secondsFormatter() {
    if (this.props.timer.seconds < 10) return `0${this.props.timer.seconds}`
    return this.props.timer.seconds
  }

  get minutesFormatter() {
    if (this.props.timer.minutes < 10) return `0${this.props.timer.minutes}`
    return this.props.timer.minutes
  }

  isVelocitySelected(velocity) {
    if (velocity === this.props.timer.velocity) return 'active'
    return ''
  }

  get toggleIcon() {
    if (this.props.timer.status === 2) return '\u25B6'
    return '||'
  }

  get disabledToggle() {
    return this.props.timer.status === 3
  }

  render() {
    return (
      <div>
        <div>
          <span className={'time-caption'}>{this.minutesFormatter}</span>
          <span className={'time-caption'}>:</span>
          <span className={'time-caption'}>{this.secondsFormatter}</span>
          <button disabled={this.disabledToggle} className={'toggle-btn'} onClick={() => this.handleToggleTimer()}>{this.toggleIcon}</button>
        </div>
        <div className={'velocity-btn-container'}>
          <button className={`velocity-btn ${this.isVelocitySelected.bind(this)(1)}`} onClick={() => this.props.speedupTimer(1)}>1X</button>
          <button className={`velocity-btn ${this.isVelocitySelected.bind(this)(1.5)}`} onClick={() => this.props.speedupTimer(1.5)}>1.5X</button>
          <button className={`velocity-btn ${this.isVelocitySelected.bind(this)(2)}`} onClick={() => this.props.speedupTimer(2)}>2X</button>
          <button className={`velocity-btn ${this.isVelocitySelected.bind(this)(5)}`} onClick={() => this.props.speedupTimer(5)}>5X</button>
        </div>
      </div>
    )
  }
}

export default connect(null,
  {
    speedupTimer,
    toggleTimer
  }
)(CountDown)