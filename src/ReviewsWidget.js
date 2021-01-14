import { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';
import Section from './components/Section/Section';

class ComponentStatistics extends Component {

  static defaultProps = {
    message: 'No feedback given'
  };
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  total = 0;
  positiveFeedback = 0;
  notifications = false;

  onAddition = options => {
    this.setState(state => ({
      [options]: state[options] + 1,
      notifications: true,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }))
  }

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positiveFeedback: Math.round((prevState.good / prevState.total) * 100)
    }))
  }
    
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onAddition}></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.state.notifications
            ? (<Statistics good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.state.total}
                positiveFeedback={this.state.positiveFeedback} />) 
            : (<Notification message={this.props.message}/>)}
        </Section>
      </>
    );
  }
}

export default ComponentStatistics;