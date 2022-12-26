import { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { onClickHandle } = this.props;
    return (
      <div className="button-box">
        <button name="good" onClick={onClickHandle}>
          Good
        </button>
        <button name="neutral" onClick={onClickHandle}>
          Neutral
        </button>
        <button name="bad" onClick={onClickHandle}>
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
