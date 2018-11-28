import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hour: null,
      min: null,
      sec: null
    }
  }

  handleChange(e){
    e.preventDefault()

  } 

  handleSubmit(e){
    e.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={() => this.handleSubmit()}>
          <input 
            name="hour"
            placeholder="Hours"
            type="number"
            value={this.state.hour}
            onChange={() => this.handleChange}
          />
          <input 
            name="min"
            placeholder="Minutes"
            type="number"
            value={this.state.min}
            onChange={() => this.handleChange}
          />
          <input 
            name="sec"
            placeholder="Seconds"
            type="number"
            value={this.state.sec}
            onChange={() => this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default App