import React, {useState} from 'react';
import ListQuestions from './list-questions/listQuestions'
import Question from './question/question'
import Answer from './answer/answer'
import Description from './description/description'
import './App.css';
import birdsData from '../data/birds.js'

export default function App() {

  const [result, setResult] = useState(0);
  let [numQuestion, setNumQuestion] = useState(0);
  const [answer, setAnswer] = useState(Math.floor(Math.random() * Math.floor(6)));
  const [clickBird, setClickBird] = useState(0);
  const [points, setPoints] = useState(5);
  const [disabled, setDisabled] = useState(true);
  const [descriptionStart, setDescriptionStart] = useState(false);
  const [endGame, setEndGame] = useState(false);


  const sumResult = (e) => {
    const list = document.getElementsByClassName('list-species-birds');
    const targetBird = [...document.getElementsByClassName('answer')];

    targetBird.forEach((item) => {
      item.firstElementChild.style.backgroundColor = 'grey';
    });

    if (numQuestion < list.length - 1) {
      list[numQuestion].classList.remove('active');
      list[numQuestion + 1].classList.add('active');

      setNumQuestion(++numQuestion);
      setAnswer(Math.floor(Math.random() * Math.floor(6)));
    }

    if (numQuestion === list.length - 1) setEndGame(true);


    setResult(result + points);
    setPoints(5);
    setDisabled(true);
    setDescriptionStart(false);
  }

  const answerClick = (value, point = 1, activButton = true) => {
    setClickBird(value);
    setPoints(points - point);
    setDisabled(activButton);
    setDescriptionStart(true);
  }

  const restart = () => {
    const list = document.getElementsByClassName('list-species-birds');

    list[list.length - 1].classList.remove('active');
    list[0].classList.add('active');

    setResult(0);
    setNumQuestion(0);
    setAnswer(Math.floor(Math.random() * Math.floor(6)));
    setClickBird(0);
    setPoints(5);
    setDisabled(true);
    setDescriptionStart(false);
    setEndGame(false);
  }

  return (
    <div>
      <ListQuestions result={result} />
      { endGame
        ? (<div className = 'end-game'>
            <div className = 'happy'>Поздравляем!</div>
            {result === 30
              ? (<div className = 'result-game'>Вы прошли викторину и набрали максимум баллов. Теперь ты знаешь кто чирикнул. </div>)
              : (<div className = 'result-game'>Вы прошли викторину и набрали { result } из 30 возможных баллов. </div>)}
            <button className = 'next-level restart' onClick = { restart }>Попробовать еще раз!</button>
          </div>)
        : (<div>
            <Question
              image = {birdsData[numQuestion][answer].image}
              name = {birdsData[numQuestion][answer].name}
              audio = {birdsData[numQuestion][answer].audio}
              disabled = {disabled}/>
            <div className = 'answer-description'>
              <Answer bird={birdsData[numQuestion]} answerClick={answerClick} answer={answer}  disabled={disabled}/>
              <Description
                image = {birdsData[numQuestion][clickBird].image}
                name = {birdsData[numQuestion][clickBird].name}
                species = {birdsData[numQuestion][clickBird].species}
                audio = {birdsData[numQuestion][clickBird].audio}
                description = {birdsData[numQuestion][clickBird].description}
                descriptionStart = {descriptionStart}/>
            </div>
            <button style={disabled  ? ({backgroundColor: '#303030'}) : ({backgroundColor: '#00bc8c'})}
            className = 'next-level' onClick = {sumResult} disabled={disabled}>Next Level</button>
      </div>)}
    </div>
    )
  }
