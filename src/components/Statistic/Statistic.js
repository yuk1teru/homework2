import { Component } from 'react';
import Notification from '../Notification';

class Statistic extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        {total() > 0 ? (
          <div>
            <p>Good:{good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad:{bad}</p>
            <br />
            <p>Total:{total()} </p>
            <p>
              Positive feedback:
              {total() > 0 ? positivePercentage() : '0%'}
            </p>
          </div>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </>
    );
  }
}

export default Statistic;
