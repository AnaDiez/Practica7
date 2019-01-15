import React from 'react';
import MyButton from './MyButton';
import {questionAnswer, changeQuestion,submit, initQuestions } from '../reducers/actions';
import $ from 'jquery';
import { View } from 'react-native';


export default class Actionbar extends React.Component {
	render() {
		return (
			<View style={{flexDirection:'column', justifyContent:'space-around'}}> 
				<View >
					<MyButton nombre = "Anterior" 
							dispatch = {this.props.dispatch} 
							funcionClick = {() => {
								this.props.dispatch(changeQuestion(this.props.currentQ - 1))
							}}

							disable = {(this.props.currentQ == 0)||(this.props.fin)}
							
							/>
				</View>

				<View >
					<MyButton nombre = "Siguiente" 
							dispatch = {this.props.dispatch} 
							funcionClick = {() => {
								this.props.dispatch(changeQuestion(this.props.currentQ + 1))
							}}
							
							disable = {(this.props.currentQ == this.props.questions.length-1)||(this.props.fin)}
							
							/>
				</View>

				<View >
					<MyButton nombre = "Enviar" 
							dispatch = {this.props.dispatch} 
							funcionClick = {() =>{
								this.props.dispatch(submit(this.props.questions));
							}}
							disable = {false}
							
							/>
				</View>

				<View >
					<MyButton nombre = "Recargar" 
							dispatch = {this.props.dispatch} 
							funcionClick = {() =>{

							    var propsButton = this.props;
							    return fetch('https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=2a3ee8fe552579932c89')
							    .then((response)=> response.json())
							    .then((responseJson)=>{
							      //Lo metes al estado
							      propsButton.dispatch(initQuestions(responseJson))
							    })
							    .catch((error)=>{
							      console.error(error);
							    });

							}}
							disable = {false}
							
							/>
				</View>

			</View>
		);
	}
}

