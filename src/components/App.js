import React from 'react';
import ListQuestions from './list-questions/listQuestions'
import Question from './question/question'
import Answer from './answer/answer'
import Description from './description/description'
import './App.css';

function App() {
  return (
    <div>
      <ListQuestions />
      <Question />
      <div className = 'answer-description'>
        <Answer />
        <Description />
      </div>
    </div>
  );
}

export default App;
