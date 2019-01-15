import React from 'react';
import Question from './Question';
import Answer from './Answer';
import Tips from './Tips';

import { View, Text, Image } from 'react-native';

import {questionAnswer, changeQuestion,submit, initQuestion } from '../reducers/actions';

export default class Content extends React.Component {
	render() {
		let url = this.props.question.attachment.url;
		return (
			<View style={{flex:1,flexDirection:'column', justifyContent:'center'}} >

				<View style={{flex:1.5,flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
					<Question question = {this.props.question} />
				</View>

				<View style={{flex:4,flexDirection:'row', justifyContent:'center', alignItems:'stretch'}}>
					<View style={{flex: 2}}>
          				<Image  style={{ flex:1, width:undefined,  height:undefined }}
               					source={{uri:this.props.question.attachment.url}} />
               		</View>

               		<View style={{flex:1, marginLeft:'7%',marginRigth:'4%'}}>
			        	<Tips question = {this.props.question} />
         			</View>
				</View>

				<View style={{flex:1,marginTop:'5%',flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'#e9d8e9'}}>
					<Answer question = {this.props.question} 
            				onQuestionAnswer = {(answer) => {
              				this.props.dispatch(questionAnswer(this.props.currentQ, answer))}}
            		/>
				</View>	

			</View>
			
		);
	}
}