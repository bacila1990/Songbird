import React, { Component } from 'react';
import './description.css'

class Description extends Component {
  render() {

    return (
      <div className = 'description-container'>
        <div className = 'guide'>
          <div>Послушайте плеер.</div>
          <div>Выберите птицу из списка</div>
        </div>
      </div>
    )
  }
}

export default Description
