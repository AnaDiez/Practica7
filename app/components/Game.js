import React from 'react';
import Content from './Content';
import Actionbar from './Actionbar';
import {questionAnswer, changeQuestion,submit, initQuestion } from '../reducers/actions';

import { View, Text } from 'react-native';

export default class Game extends React.Component {
	render() {

		return (
			<View style={{flex:1,flexDirection:'column', justifyContent:'center'}} >
				
				<View style={{flex:2,flexDirection:'column', justifyContent:'center',alignItems:'center',backgroundColor:'purple'}}>
					<Text style={{fontWeight:'bold', fontSize:30, color:'white'}}>¡Bienvenido a Quiz!</Text>
				</View>

				{ this.props.fin ?  <View style={{flex:8, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
					<Text style={{fontWeight:'bold', fontSize:30, color:'purple'}}>Has acertado</Text>
					<Text style={{fontWeight:'bold', fontSize:30, color:'purple'}}>{this.props.score}</Text>
					<Text style={{fontWeight:'bold', fontSize:30, color:'purple'}}>preguntas</Text>
				</View> : null }


				{ this.props.fin ?  null: <View style={{flex:8}}>
					<Content  question = {this.props.question} 
                          dispatch = {this.props.dispatch} 
                          currentQ = {this.props.currentQ} 
                          fin = {this.props.fin} 

                          />
				</View>}

				<View style={{flex:4, flexDirection:'column', justifyContent:'center'}}>
		          <Actionbar dispatch = {this.props.dispatch} 
		                currentQ = {this.props.currentQ} 
		                questions = {this.props.questions}
		                score = {this.props.score}
		                fin = {this.props.fin}
		                 />
				</View>

			</View>
		);
	}
}