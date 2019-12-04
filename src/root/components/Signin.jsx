import React from 'react';
import { Prompt } from 'react-router-dom';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password:'' };
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit() {
    this.setState({ username: '', password:'' });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.username}
          onChange={this.handleUsernameChange.bind(this)}
        />
        <input
          value={this.state.password}
          onChange={this.handlePasswordChange.bind(this)}
        />
        <div>
          <button onClick={this.handleSubmit.bind(this)}>Signin</button>
        </div>
        <Prompt
          when={this.state.username !== ''}
          message="Are you sure you want to leave signin ?"
        />
      </div>
    );
  }
}

export default Signin;