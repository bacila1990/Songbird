import React from 'react';
import './answer.css'

export default function Answer(props) {
  const questionAnswer = (e) => {

    if (!props.disabled) return;

    if (props.answer === Number(e.target.id)) {
      e.target.firstElementChild.style.backgroundColor = '#00bc8c';

      return props.answerClick(e.target.id, 0, false)
    } else {
      e.target.firstElementChild.style.backgroundColor = 'red';
    }

    return props.answerClick(e.target.id)
  }

  const { bird } = props;

  return (
    <div className = 'answer-container'>
      <ul className = 'answer-list' onClick={questionAnswer}>
      { bird.map(item => <li id={item.id} key={item.id} className='answer'><span  className ='check'></span>{item.name}</li>) }
      </ul>
    </div>
  )
}
