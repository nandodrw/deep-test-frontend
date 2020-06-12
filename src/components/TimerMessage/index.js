import React, { Component } from 'react'
import './styles.css'

class TimerMessage extends Component {
  constructor(props) {
    super(props);
  }

  get message() {
    if (this.props.timer.minutes === 0 &&
      this.props.timer.seconds === 0 &&
    this.props.timer.status !== 3) return 'Time’s up!'

    if (this.props.timer.minutes + (this.props.timer.seconds / 60) < this.props.timer.initialMinutesStore / 2)
      return 'More than halfway there!'

    return '\u0000'
  }

  get messageStyle() {
    if (this.props.timer.minutes === 0
      && this.props.timer.seconds <= 20 && this.props.timer.status !== 3)
        return {color: 'red'}

    return {}
  }

  get blinkClass() {
    if (this.props.timer.minutes === 0 &&
      this.props.timer.seconds <= 10 &&
      this.props.timer.seconds > 0 && this.props.timer.status !== 3)
      return 'blinking'

    return ''
  }

  render() {
    return <div className={`timer-message ${this.blinkClass}`} style={this.messageStyle}>{this.message}</div>
  }
}

export default TimerMessage