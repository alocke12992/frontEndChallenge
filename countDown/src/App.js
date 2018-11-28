import React, { Component, Fragment } from 'react'
import Timer from './Timer.js'
import Form from './Form.js'
import './App.css'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      running: false,
    }
    this.handleStart = this.handleStart.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.handleReset = this.handleStop.bind(this)
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(this.state.running !== prevState.running){
      if (this.state.running) {
          this.handleStart();
      }
    }
  }
  
  handleStart() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState(
        {count: newCount >= 0 ? newCount : 0}
      );
    }, 1000);
  }
  
  handleStop() {
    if(this.timer) {
      clearInterval(this.timer);
      this.setState(
        {running:false}
      );
    }
  }
    
  handleCountdown(seconds) {
    this.setState({
      count: seconds,
      running: true
    })
  }
  
  render() {
    const {count} = this.state;
    return (
      <Fragment>
        <Timer time={count}/>
        <Form setCountDown={(seconds) => this.handleCountdown(seconds)}/>
      </Fragment>
    )
  }
}

export default App
