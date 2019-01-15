import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from "./Game";

import {questionAnswer, changeQuestion,submit, initQuestions } from '../reducers/actions';
import $ from 'jquery';

class GameScreen extends React.Component {

  componentDidMount(){
    return fetch('https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=2a3ee8fe552579932c89')
    .then((response)=> response.json())
    .then((responseJson)=>{
      //Lo metes al estado
      this.props.dispatch(initQuestions(responseJson))
    })
    .catch((error)=>{
      console.error(error);
    });
  }
  render() {
        return (

          <Game question= {this.props.questions[this.props.currentQuestion]}
                dispatch = {this.props.dispatch}
                currentQ = {this.props.currentQuestion}
                questions = {this.props.questions}
                score = {this.props.score} 
                fin = {this.props.finished} />
      
        );
  }


}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(GameScreen);
