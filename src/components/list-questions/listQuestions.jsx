import React from 'react';
import logo from '../../images/logo.svg'
import './listQuestions.css'

export default function ListQuestions(props) {
  const { result } = props

  return (
    <div className = 'list-container'>
      <div className = 'list-questions'>
        <img className = "logo" src={ logo } alt="logo"/>
        <div className = 'score'>Score: {result} </div>
      </div>
      <ul className = 'species-birds-container'>
        <li className = 'list-species-birds first-species-birds active'>Разминка</li>
        <li className = 'list-species-birds'>Воробьиные</li>
        <li className = 'list-species-birds'>Лесные птицы</li>
        <li className = 'list-species-birds'>Певчие птицы</li>
        <li className = 'list-species-birds'>Хищные птицы</li>
        <li className = 'list-species-birds last-species-birds'>Морские птицы</li>
      </ul>
    </div>
  )
}
