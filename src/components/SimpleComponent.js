// Code SimpleComponentHere Here
import React from 'react';

class SimpleComponent extends React.Component {

  state = {
    mood: 'happy'
  }
  handleClick = () => {
    let m = 'happy'
    if(this.state.mood === 'happy'){
      m = 'sad'
    }
    this.setState({
      mood: m
    })
  }
  render (){
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}


export default SimpleComponent
