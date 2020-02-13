import React, { Component } from 'react';
import './answer.css'

class Answer extends Component {


  questionAnswer = (e) => {
    const targetBird = [...document.getElementsByClassName('answer')];

    if (this.props.bird[this.props.answer].name === e.target.innerText) {
      e.target.firstElementChild.style.backgroundColor = '#00bc8c';
      
      return this.props.answerClick(targetBird.indexOf(e.target), 0, false)
    } else {
      e.target.firstElementChild.style.backgroundColor = 'red';
    }

    return this.props.answerClick(targetBird.indexOf(e.target))
  }

  render() {
    const { questionAnswer } = this;
    const { bird } = this.props;

    return (
      <div className = 'answer-container'>
        <ul className = 'answer-list' onMouseUp= {questionAnswer}>
          <li className = 'answer'><span className = 'check'></span>{bird[0].name}</li>
          <li className = 'answer'><span className = 'check'></span>{bird[1].name}</li>
          <li className = 'answer'><span className = 'check'></span>{bird[2].name}</li>
          <li className = 'answer'><span className = 'check'></span>{bird[3].name}</li>
          <li className = 'answer'><span className = 'check'></span>{bird[4].name}</li>
          <li className = 'answer answer-last'><span className = 'check'></span>{bird[5].name}</li>
        </ul>
      </div>
    )
  }
}

export default Answer
