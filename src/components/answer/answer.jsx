import React, { Component } from 'react';
import './answer.css'

class Answer extends Component {
  render() {

    return (
      <div className = 'answer-container'>
        <ul className = 'answer-list'>
          <li className = 'answer'><span className = 'check'></span>Разминка</li>
          <li className = 'answer'><span className = 'check'></span>Воробьиные</li>
          <li className = 'answer'><span className = 'check'></span>Лесные птицы</li>
          <li className = 'answer'><span className = 'check'></span>Певчие птицы</li>
          <li className = 'answer'><span className = 'check'></span>Хищные птицы</li>
          <li className = 'answer answer-last'><span className = 'check'></span>Морские птицы</li>
        </ul>
      </div>
    )
  }
}

export default Answer
