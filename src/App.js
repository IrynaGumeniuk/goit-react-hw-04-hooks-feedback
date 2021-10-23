import { useState } from "react";
import Section from "./components/Section/Section";
import Feedback from "./components/Feedback/Feedback";
import Statistic from "./components/Statistic/Statistic";

export default function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackTypes = { good, neutral, bad };

  const counter = event => {
    switch (event.target.name) {
      case 'good':
        return setGood(prevState => prevState + 1);
      case 'neutral':
        return setNeutral(prevState => prevState + 1);
      case 'bad':
        return setBad(prevState => prevState + 1);
    }
  };

  const getTotal = () =>
    Object.values(feedbackTypes).reduce((acc, item) => (acc += item), 0);

  const positivePercentage = () => {
    return Math.round((good / getTotal()) * 100);
  };

  return (
    <Section title="Please leave feedback">
      <Feedback counter={counter} />
      <Statistic
        good={good}
        neutral={neutral}
        bad={bad}
        total={getTotal()}
        positivePercentage={positivePercentage()}
      />
    </Section>
  );
}
