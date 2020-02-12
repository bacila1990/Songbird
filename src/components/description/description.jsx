import React, { Component } from 'react';
import './description.css'
import ReactAudioPlayer from 'react-audio-player';

class Description extends Component {

  render() {
    const { image, name, species, audio, description, descriptionStart } = this.props

    return (
      <div className = 'description-container'>
        {descriptionStart ?
          (<><div className = 'guide'>
              <img className = 'img-bird' src= { image } alt="bird"/>
              <div className = 'question'>
                <div className = 'name-bird'> { name } </div>
                <div className = 'species-bird'> { species } </div>
                <div className = 'sound-bird'>
                <ReactAudioPlayer
                  src= { audio }
                  controls
                  />
                </div>
              </div>
            </div>
            <div className = 'description-bird'> { description } </div>
          </>)
         : (<div className = 'prompt'>
             <div>Послушайте плеер.</div>
             <div>Выберите птицу из списка</div>
           </div>)}
      </div>
    )
  }
}

export default Description
