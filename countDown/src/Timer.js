import React, {Fragment} from 'react'

class Timer extends React.Component {
  constructor(){
    super();
    this.format = this.format.bind(this)
    this.formatInterval = this.formatInterval.bind(this)
  }

  format(time) {
    let hours = Math.floor(time / (60 * 60));

    let minute_calc = time % (60 * 60);
    let minutes = Math.floor(minute_calc / 60);

    let sec_calc = minute_calc % 60;
    let seconds = Math.ceil(sec_calc);

    hours = this.formatInterval(hours)
    minutes = this.formatInterval(minutes)
    seconds = this.formatInterval(seconds)
    return `${hours}:${minutes}:${seconds}`
  }

  formatInterval(time){
    return time.toString().length === 1 ? "0" + time : time
  }

  render () {
    const {time} = this.props
    return (
      <Fragment>
        <h1>{this.format(time)}</h1>
      </Fragment>
    )
  }
}

export default Timer