import React from 'react';

import {questionAnswer, changeQuestion,submit, initQuestion } from '../reducers/actions';

import { TextInput} from 'react-native';

export default class Answer extends React.Component {
	render() {
		return (

			<TextInput 
				style={{height:20, fontSize: 20}}
			  	placeholder= "Type Answer"
			  	value={this.props.question.userAnswer || ""}
				onChangeText={(text) => {
				this.props.onQuestionAnswer(text);
				}} />
			
		);
	}
}