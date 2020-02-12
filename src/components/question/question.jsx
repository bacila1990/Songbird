import React, { Component } from 'react';
import './question.css'
import ReactAudioPlayer from 'react-audio-player';
import imageNone from '../../images/bird-none.jpg';


class Question extends Component {
  render() {
    const { image, name, audio, disabled } = this.props

    return (
      <div className = 'question-container'>
        <img className = 'img-bird' src= { disabled ? (imageNone) : (image) } alt="bird"/>
        <div className = 'question'>
          <div className = 'name-bird'> {  disabled ? ('*****') : (name)} </div>
          <div className = 'sound-bird'>
          <ReactAudioPlayer
            src= { audio }
            controls
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Question
