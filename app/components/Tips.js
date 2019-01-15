import React from 'react';

import {questionAnswer, changeQuestion,submit, initQuestion } from '../reducers/actions';

import { View, Text, Image, FlatList } from 'react-native';

export default class Tips extends React.Component {
	render() {
		let pistas = this.props.question.tips.map((tip,index)=>{
			return {tip:tip}
		})
		return ( 	
			<View style={{}}>

				<Text style={{fontWeight:'bold', fontSize:17}}>Tips:</Text>
			
				<FlatList
					data = {pistas}
					renderItem={({item}) => <Text>{item.tip}</Text>}
				/>
			
			</View>
		);
	}
}

