import React from "react";

class HelloWorld extends React.Component {
  state = {
    who: "world"
  };
  
  handleFriendClick = () => {
    this.setState({
      who: 'friend'
  })
  }
  handleReactClick = () => {
    this.setState({
      who: 'react'
  })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <p>Hello, {this.state.who}!</p>

        <button className='button' onClick={() => this.setState({ who: "world" })}>World</button>
        <button className='button' onClick={this.handleFriendClick}>Friend</button>
        <button className='button' onClick={this.handleReactClick}>React</button>
      </div>
    );
  }
}
export default HelloWorld;
