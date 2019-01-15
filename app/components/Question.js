import React from 'react';

import {questionAnswer, changeQuestion,submit, initQuestion } from '../reducers/actions';

import { View, Text } from 'react-native';

export default class Question extends React.Component {
	render() {
		return (

			<Text style={{fontWeight:'bold', fontSize:20}}>{this.props.question.question}</Text>
		);
	}
}