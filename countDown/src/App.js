import React, { Component, Fragment } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sec: 0,
      counting: false
    }
  }

  handleChange(e){
    this.setState({sec: time})
  } 

  handleSubmit(e){
    e.preventDefault()
    let time = this.refs.sec.value
    this.setState({
      sec
      counting: true
    })
  }

  componentDidUpdate(prevProps, prevState, newProps, newState){
    console.log(prevProps, prevState, newState, newProps)
    if (this.state.counting){
      this.handleCountDown()
    }
  }

  handleCountDown() {
    setInterval(() => {
      let timeRemaining = this.state.sec - 1
      this.setState({ 
        sec: timeRemaining >= 0 ? timeRemaining : 0 
      })
    }, 1000)
  }

  showForm(){
    return(
      <form onSubmit={(e) => this.handleSubmit(e)}>
          <input 
            name="sec"
            placeholder="Seconds"
            type="number"
            ref="sec"
          />
          <button type="submit">
            Start
          </button>
        </form>
    )
  }

  formatTime(time){
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    return minutes + ':' + seconds;
  }

  ticker(){
    return(

    <div>
      {this.formatTime(this.state.sec)}
    </div>
    )
  }

  render() {
    return (
      <div className="App">
        <Fragment>
          {this.showForm()}
        </Fragment>
        <Fragment>
          {
            this.ticker()
          }
        </Fragment>
      </div>
    )
  }
}

export default App