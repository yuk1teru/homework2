import './App.css';
import { Component } from 'react';
import Statistic from './Statistic/';
import FeedbackOptions from './FeedbackOptions/';
import Section from './Section/';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleRating = e => {
    this.setState(prevState => {
      const { name } = e.target;
      return {
        [name]: prevState[name] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return (
      `${((good + neutral) / (good + neutral + bad)) * 100}`.split('.')[0] + `%`
    );
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Оцініть обслуговування в нашому кафе">
          <FeedbackOptions onClickHandle={this.handleRating} />
        </Section>
        <Section title="Статистика">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}

export default App;
