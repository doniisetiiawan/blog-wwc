import React from 'react';

export default class HiddenContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  render() {
    const { title, children } = this.props;
    const { isVisible } = this.state;

    if (!isVisible) {
      return (
        <span>
          <button
            type="button"
            onClick={() => this.setState({ isVisible: true })}
          >
            {title} &#9656;
          </button>
        </span>
      );
    }

    return (
      <span>
        <button
          type="button"
          onClick={() => this.setState({ isVisible: false })}
        >
          {title} &#9662;
        </button>
        <div>{children}</div>
      </span>
    );
  }
}
