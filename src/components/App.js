import React, { Component } from 'react';
import ListQuestions from './list-questions/listQuestions'
import Question from './question/question'
import Answer from './answer/answer'
import Description from './description/description'
import './App.css';
import birdsData from '../data/birds.js'

class App extends Component {
  state = {
    result: 0,
    numQuestion: 0,
    answer: Math.floor(Math.random() * Math.floor(6)),
    clickBird: 0,
    points: 5,
    disabled: true,
    descriptionStart: false,
    endGame: false
  }

  sumResult = (e) => {
    const list = document.getElementsByClassName('list-species-birds');
    const targetBird = [...document.getElementsByClassName('answer')];

    targetBird.forEach((item) => {
      item.firstElementChild.style.backgroundColor = 'grey';
    });

    if (this.state.numQuestion < list.length - 1) {
      list[this.state.numQuestion].classList.remove('active');
      list[this.state.numQuestion + 1].classList.add('active');

      this.setState(countState => ({
        numQuestion: ++countState.numQuestion,
        answer: Math.floor(Math.random() * Math.floor(6))
      }))
    }

    if (this.state.numQuestion === list.length - 1) {
      this.setState(() => ({
        endGame: true
      }))
    }

    this.setState(countState => ({
      result: countState.result + this.state.points,
      points: 5,
      disabled: true,
      descriptionStart: false
    }))
  }

  answerClick = (value, point = 1, activButton = true) => {
    this.setState({
      clickBird: value,
      points: this.state.points - point,
      disabled: activButton,
      descriptionStart: true
    })
  }

  restart = () => {
    const list = document.getElementsByClassName('list-species-birds');

    list[list.length - 1].classList.remove('active');
    list[0].classList.add('active');

    this.setState({
      result: 0,
      numQuestion: 0,
      answer: Math.floor(Math.random() * Math.floor(6)),
      clickBird: 0,
      points: 5,
      disabled: true,
      descriptionStart: false,
      endGame: false
    })
  }

  render() {
    const { result, answer, numQuestion, clickBird, disabled, descriptionStart, endGame } = this.state;
    const { sumResult, restart } = this;

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
                <Answer bird={birdsData[numQuestion]} answerClick={this.answerClick} answer={answer}  disabled={disabled}/>
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
  }


export default App;
