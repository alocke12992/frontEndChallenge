import React from 'react'

class Form extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const time = parseInt(this.refs.seconds.value)
    this.refs.seconds.value = '';
    this.props.setCountDown(time);
  }
  
  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="number" ref="seconds" placeholder="seconds"/>
        <button type="submit">
          Start
        </button>
      </form>
    )
  }
}

export default Form