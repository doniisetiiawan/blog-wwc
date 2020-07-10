import React from 'react';

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }

  componentDidMount = () => {
    this.timer = setInterval(
      () => this.tick(),
      1000,
    );
  };

  componentWillUnmount = () => {
    clearInterval(this.timer);
  };

  tick = () => {
    const { seconds } = this.state;
    this.setState({
      seconds: seconds + 1,
    });
  };

  render() {
    const { seconds } = this.state;
    return <h1>You spent {seconds} seconds on this page!</h1>;
  }
}

export default Timer;
