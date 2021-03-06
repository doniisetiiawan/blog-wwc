import React from 'react';

import HiddenContent from './HiddenContent';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      message: '',
    };
  }

  handleUsername = (evt) => {
    this.setState({ username: evt.target.value });
  };

  handlePassword = (evt) => {
    this.setState({ password: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.login(
      this.state.username,
      this.state.password,
    );
    this.setState({ message: 'Login successful!' });
  };

  render() {
    return (
      <HiddenContent title="Login">
        <form onSubmit={this.handleSubmit}>
          <div>
            Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsername}
            />
          </div>
          <div>
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </div>
          <input type="submit" value="Login" />
          <div style={{ color: 'green' }}>
            {!this.props.error ? this.state.message : ''}
          </div>
        </form>
      </HiddenContent>
    );
  }
}
