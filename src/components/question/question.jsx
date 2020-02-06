import React, { Component } from 'react';
import './question.css'
import bird from '../../images/bird-none.jpg'

class Question extends Component {

  render() {

    return (
      <div className = 'question-container'>
        <img className = 'img-bird' src= { bird } alt="bird"/>
        <div className = 'question'>
          <div className = 'name-bird'>******</div>
          <div className = 'sound-bird'>
            <audio controls>
              <source src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
    )
  }
}

export default Question
