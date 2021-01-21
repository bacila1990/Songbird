import React from 'react';
import './question.css'
import ReactAudioPlayer from 'react-audio-player';
import imageNone from '../../images/bird-none.jpg';

export default function Question(props) {
  const { image, name, audio, disabled } = props

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
